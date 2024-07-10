import React, { useState } from 'react';
import { contents } from './downloads';
import { motion, AnimatePresence } from 'framer-motion';

function Target() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-3/4 mx-auto py-8">
            {contents.map((item, index) => (
                <div key={item.title} className="border border-rhino-purple text-white text-2xl rounded-md mb-2">
                    <div 
                        className="bg-rhino-purple p-4 cursor-pointer" 
                        onClick={() => toggleOpen(index)}
                    >
                        <h2 className="text-2xl">{item.title}</h2>
                    </div>
                    <AnimatePresence initial={false}>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="p-4">
                                    <p><a href={item.details.downloadMirror} className="text-rhino-purple underline">Download</a></p>
                                    <p>Download Size: {item.details.downloadSize}</p>
                                    <p>Included kernel: {item.details.kernel}</p>
                                    <p>Source Code: <a href={item.details.sourceCode} className="text-rhino-purple underline">{item.details.sourceCode}</a></p>
                                    {item.details.login && (
                                        <div className="border p-2 rounded-md border-rhino-purple border-2 m-2">
                                            <p>Username: {item.details.login.username}</p>
                                            <p>Password: {item.details.login.password}</p>
                                        </div>
                                    )}
                                    <p className="text-lg">SHA256sum: {item.details.shasum}</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}

export default Target;