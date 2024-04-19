import { useState } from "react";
import { CirclesWithBar } from "react-loader-spinner";


function TitleModal({ open, setOpenTitleModalId, title, setPostTitle, handleSave, saving }) {

    const [isValid, setIsValid] = useState(true); 

    const handleChange = (event) => {
        const inputValue = event.target.value.trim();
        setIsValid(!!inputValue) ; // Validate if input value is not empty
        setPostTitle(inputValue);
        
    };

    return (
        <div className={`fixed z-99 inset-0 flex justify-center items-center transition-opacity ${open ? 'opacity-100 bg-black/60 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <div className="bg-gray-100 rounded-lg shadow-md p-6 w-96">
                <input
                    type="text"
                    className={`w-full h-10 px-3 mt-2 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${!isValid ? 'border-red-500 shadow-red ' : ''}`}
                    placeholder={title || "Title"}
                    onChange={handleChange}
                />
                {!isValid && 
                            <p className="text-red-500 text-sm">   invalid   </p>}
                <div className="flex justify-end mt-4">
                    <button 
                    onClick={handleSave}
                    type="button"
                    className="mr-2 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    disabled={saving || !isValid }>
                        {saving ? <>
                        <CirclesWithBar  height="25"     width="25"     color="#f4ff25"     outerCircleColor="#ffffff "     innerCircleColor="#f295"  barColor="#ffff99"   ariaLabel="circles-with-bar-loading"  wrapperStyle={{}}    wrapperClass=""    visible={true}/>
                        </> : "Save"}
                    </button>
                    <button onClick={() => setOpenTitleModalId(false)} type="button" className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TitleModal;
