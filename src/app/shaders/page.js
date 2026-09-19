"use client";
import { useEffect, useRef, useState } from "react";


export default function Shaders() {
    const canvasRef = useRef();
    const [status, setStatus] = useState("loading");
    const [error, setError] = useState(null);

    // WebGPU initialization effect 
    useEffect(() => {
        const vertexShader = `
            @vertex
            fn vs_main(@builtin(vertex_index) vertex_index: u32) -> @builtin(position) vec4<f32> {
                let positions = array<vec2<f32>, 3>(
                    vec2<f32>( 0.0,  0.5),
                    vec2<f32>(-0.5, -0.5),
                    vec2<f32>( 0.5, -0.5)
                );
                return vec4<f32>(positions[vertex_index], 0.0, 1.0);
            }
            `;

        const fragmentShader = `
            @fragment
            fn fs_main() -> @location(0) vec4<f32> {
                return vec4<f32>(1.0, 0.5, 0.0, 1.0);
            }
            `;

        // Convert shader strings to GPU modules
        const vertexModule = device.createShaderModule({
            code: vertexShader
        });

        const fragmentModule = device.createShaderModule({
            code: fragmentShader
        });

        const pipeline = device.createRenderPipeline({
            layout: 'auto',
            vertex: {
                module: vertexModule,
                entryPoint: 'vs_main',
            },
            fragment: {
                module: fragmentModule,
                entryPoint: 'fs_main',
                targets: [{ format: presentationFormat }],
            },
            primitive: {
                topology: 'triangle-list',
            },
        });

        const renderPass = commandEncoder.beginRenderPass({
            colorAttachments: [{
                view: textureView,
                clearValue: { r: 0.2, g: 0.4, b: 0.8, a: 1.0 },
                loadOp: 'clear',
                storeOp: 'store',
            }],
        });

        // NEW: Set the pipeline with our shaders
        renderPass.setPipeline(pipeline);

        // NEW: Draw the triangle (3 vertices)
        renderPass.draw(3);

        renderPass.end();
    }, []);

    if (status === "error") return <div>Error: {error}</div>;
    if (status === "loading") return <div>Loading...</div>;

    return (
        <main>
            <h1>WebGPU Canvas</h1>
            <canvas ref={canvasRef}></canvas>
            <p>Basic WebGPU setup complete!</p>
        </main>
    );
}
