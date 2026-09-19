'use client';

import React, { useRef } from 'react';
import Image from 'next/image';

// Screenshot that opens full-size when clicked. A native <dialog> handles
// Escape-to-close, focus trapping, and returning focus to the thumbnail for us.
// It has to be positioned `fixed`: the UA stylesheet lays a dialog out at its
// static position in the document, which makes opening one jump the page. The
// explicit w/h go with it -- a dialog is `fit-content` by default, so without
// them it shrinks to the image and there is nothing to centre against.
const ProjectImage = ({ image, title }) => {
    const dialog = useRef(null);

    return (
        <>
            <button
                type="button"
                onClick={() => dialog.current?.showModal()}
                className="group block w-full cursor-zoom-in"
                aria-label={`Enlarge screenshot of ${title}`}
            >
                <Image
                    src={image}
                    alt=""
                    className="w-full aspect-video object-cover rounded-box border border-base-300 transition-opacity group-hover:opacity-75"
                />
            </button>
            <dialog
                ref={dialog}
                // Anything that isn't the image itself -- the backdrop, the
                // letterbox bars beside a narrow screenshot -- counts as a
                // click outside, and closes.
                onClick={(event) => { if (event.target.tagName !== 'IMG') dialog.current?.close(); }}
                className="fixed inset-0 m-0 w-full h-full max-w-none max-h-none bg-transparent p-4 sm:p-8 backdrop:bg-black/80 open:flex open:items-center open:justify-center"
            >
                {/* No frame and no upscaling: each screenshot opens at its own
                    natural size, capped to the viewport. The source files are
                    kept to a similar width so they open at a similar size. */}
                <Image
                    src={image}
                    alt={`Screenshot of ${title}`}
                    className="w-auto h-auto max-w-full max-h-full object-contain rounded-box"
                />
                <button
                    type="button"
                    onClick={() => dialog.current?.close()}
                    aria-label="Close"
                    className="absolute top-4 right-4 grid place-items-center h-10 w-10 bg-base-100 text-base-content border border-base-300 rounded-btn hover:bg-base-200"
                >
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                        <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                    </svg>
                </button>
            </dialog>
        </>
    );
};

export default ProjectImage;
