import React from 'react';

const CancelButton = () => {
    return (
        <div>
         <button className="px-4 py-2 border border-red-200 text-red-500 rounded-md hover:bg-red-50 flex items-center gap-2 text-sm font-medium">
                        🗑 Cancel
                    </button>

        </div>
    );
};

export default CancelButton;