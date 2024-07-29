import React, {useState, useRef, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { pdfjs } from 'react-pdf';
import { Document, Page } from 'react-pdf';
//import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import kisikiterms from './kisikiterms.pdf'
//import PSPDFKit from "pspdfkit"


const TermsCondtions = () => {
    // pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    //     "pdfjs-dist/build/pdf.worker.min.js",
    //     import.meta.url
    // ).toString();
    const navigate = useNavigate()
    const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	const onDocumentLoadSuccess = ({ numPages }) => {
		setNumPages(numPages);
	};

	const goToPrevPage = () =>
		setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

	const goToNextPage = () =>
		setPageNumber(
			pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
		);
    const pdfUrl =`http://${window.location.host}/src/pages`
    const handleClick = () => {
        navigate(kisikiterms)
        // const link = document.createElement("a");
        // link.href = pdfUrl;
        // link.download = kisikiterms; // specify the filename
        // document.body.appendChild(link);
        // link.click();
        // document.body.removeChild(link);

    }
  return (
    <div className="mx-auto flex flex-wrap flex-row mt-20 mb-15 max-w-2xl gap-2 md:grid-cols-2 lg:grid-cols-1">
        <div className="sm:px-7.5 w-full col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-8">
            <Link to="/" className="text-primary">
               <p className="underlined"> Back home</p>
            </Link>
            <div className="mt-10 mb-3 justify-between gap-15 sm:flex">
                <div className="flex flex-col flex-wrap gap-2">
                    <h3 className="text-xl font-semibold text-black dark:text-white">
                        Terms & Conditions
                    </h3>
                    <p className="text-black/100 dark:text-white">
                        By continuing to use the Kisiki Capital website, you agree to these terms and conditions. To review the full terms and conditions, please download the document.
                    </p>
                </div>
                <div>
                    <div className="relative z-20 inline-block">
                        <button onClick={handleClick} className="p-4 rounded-md bg-warning text-black dark:text-white">
                            Download
                        </button>
                        <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2">
                            <svg
                                width="10"
                                height="6"
                                viewBox="0 0 10 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z"
                                fill="#637381"
                                />
                                <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M1.22659 0.546578L5.00141 4.09604L8.76422 0.557869C9.08459 0.244537 9.54201 0.329403 9.79139 0.578788C10.112 0.899434 10.0277 1.36122 9.77668 1.61224L9.76644 1.62248L5.81552 5.33722C5.36257 5.74249 4.6445 5.7544 4.19352 5.32924C4.19327 5.32901 4.19377 5.32948 4.19352 5.32924L0.225953 1.61241C0.102762 1.48922 -4.20186e-08 1.31674 -3.20269e-08 1.08816C-2.40601e-08 0.905899 0.0780105 0.712197 0.211421 0.578787C0.494701 0.295506 0.935574 0.297138 1.21836 0.539529L1.22659 0.546578ZM4.51598 4.98632C4.78076 5.23639 5.22206 5.23639 5.50155 4.98632L9.44383 1.27939C9.5468 1.17642 9.56151 1.01461 9.45854 0.911642C9.35557 0.808672 9.19376 0.793962 9.09079 0.896932L5.14851 4.60386C5.06025 4.67741 4.92785 4.67741 4.85431 4.60386L0.912022 0.896932C0.809051 0.808672 0.647241 0.808672 0.54427 0.911642C0.500141 0.955772 0.47072 1.02932 0.47072 1.08816C0.47072 1.16171 0.50014 1.22055 0.558981 1.27939L4.51598 4.98632Z"
                                fill="#637381"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
            <div>
                {/* <nav>
                    <button onClick={goToPrevPage}>Prev</button>
                    <button onClick={goToNextPage}>Next</button>
                    <p>
                        Page {pageNumber} of {numPages}
                    </p>
                </nav> */}

                {/* <Document
                    file={PdfFile}
                    onLoadSuccess={onDocumentLoadSuccess}
                    workerUrl="node_modules/react-pdf/dist/pdf.worker.min.js"
                >
                </Document> */}
                {/* <PdfViewerComponent document={pdfDown} /> */}
                <p className="text-black/100 font-bold mt-10">If the Download button is not working Click </p>
                <p className="bg-primary text-center w-30 p-2 mt-2 rounded-md h-10 text-white">
                    <a className=" text-white" href={kisikiterms} target="_blank"
                        rel="noreferrer"> 
                        Here
                    </a>
                </p>
            </div>
        </div>
    </div>
  )
}
// export const PdfViewerComponent = (props) => {
// 	const containerRef = useRef(null);

// 	useEffect(() => {
// 		const container = containerRef.current;
// 		let instance;
// 		(async function () {
// 			//PSPDFKit = await import('pspdfkit');
// 			PSPDFKit.unload(container);

// 			instance = await PSPDFKit.load({
// 				// Container where PSPDFKit should be mounted.
// 				container,
// 				// The document to open.
// 				document: props.document,
// 				// Use the public directory URL as a base URL. PSPDFKit will download its library assets from here.
// 				baseUrl: `${window.location.protocol}//${window.location.host}/public`,
// 			});
// 		})();

// 		return () => PSPDFKit && PSPDFKit.unload(container);
// 	}, []);

// 	return (
// 		<div
// 			ref={containerRef}
// 			style={{ width: '100%', height: '100vh' }}
// 		/>
// 	);
// }

export default TermsCondtions