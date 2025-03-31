import React, { useEffect }  from 'react';
import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';

function Products() {

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className='motion-wrapper'
        >
            <div className='body'>
                <Outlet /> {/* ネストされたルートがここに表示される */}
            </div>
        </motion.div>
    );
}

export default Products;