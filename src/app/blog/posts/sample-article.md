---
title: My First Blog Post
date: 2025-08-05
author: Rishi Gadhia
---

Welcome to My First Blog Post\!  

Recently, I have begun working on a backtesting engine written in Go. Go is a relatively new language for me, but it was pretty easy to pick up and I have enjoyed the experience so far. It was a good choice for a backtester because it has good performance, is strongly typed, and has a very powerful concurrency model. A lot of the built-in tools such as pprof was also very useful for finding bottlenecks in the code, and allowed me to find ways to improve the speed of my backtester.

Originally, running a 10 year backtest with logs of around 10000 tickers took ~30 secs to run. But after leveraging goroutines and addressing bottlenecks shown in pprof, my backtester does it in 3-5 seconds, and most of that is just simply running queries in a duckDB table.  

One interesting test I did that was running multiple simulations of RandBuySell strategy defined as follows:

```go

func (p *Portfolio) RandomBuySell(ticker string, historicalData []data.AssetData, localRand *rand.Rand) {

 for i := range historicalData {
  if i == 0 {
   continue
  }

  previousDayData := historicalData[i-1]
  currentDayData := historicalData[i]
  startingValue := p.GetPortfolioValue(ticker, previousDayData.Close)
  randomAmount, randomNum := localRand.Float64(), localRand.Float64() // Buy or sell random amounts

  if randomNum >= 0.5 {
   amount := greedyBuy(p.BuyingPower*randomAmount, currentDayData.Close)
   p.Buy(ticker, float64(amount), currentDayData.Close, currentDayData.Date)
  } else {
   if pos, _ := p.FindPosition(ticker); pos != nil && pos.Amount > 0 {
    amount := int(pos.Amount * randomAmount)
    p.Sell(ticker, float64(amount), currentDayData.Close, currentDayData.Date)
   }
  }
  endingValue := p.GetPortfolioValue(ticker, currentDayData.Close)
  p.AdjustPortfolioParameters(ticker, currentDayData, startingValue, endingValue)
 }
}
```

This strategy is simply coin-flipping a buy or sell, at a random amount each day. I will be using this strategy for only single ticker portfolios, as my backtester currently only supports single ticker portfolios. I ran 150 simulations of this startagy to see if the results will converge in some way. This was run over a period ranging from 2020-01-01 to 2025-01-01.

I was curious in how a strategy such as this would perform, and was quite shocked by the results. I should clarify that this strategy is more weighted towards buying than selling because my backtester does not allow selling short. So naturally, it is more likely over time to buy more than sell. However, you would expect a strategy like this to be pure nonsense and not perform as well as traditional mean-reverting or SMA strategies.

Here's the resulting histogram:

![Ticker Histogram](/ticker_histogram.png)

A lot of tickers were shown to be consistently profitable over this period. A sharpe ratio > 1 is usually considered a positive metric for trading. The Sharpe ratio just measures a stock's gains over volatility in a given period. So a ratio > 1 means the stock/strategy was consistently profitable. For reference, NVDA has a sharpe ratio of 1.30 if you bought it around 2015 July and held it till now.

Which makes the histogram results really shocking. Now you may notice some oddball tickers here such as TGRP which has actually gone down by 86% over this period, but it still has a sharpe ratio > 1. This is most likely because of very low daily volatility really carrying the results. In the future, I will test this on stocks with higher market caps to avoid such anomalies. But generally, in this chart you will see stocks that were big winners over the last 5 years. Even when coin-flipping the trades, if you select a good stock over a long enough period of time, you may have effectively created a good trading strategy.
