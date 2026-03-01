import React, { useState, useEffect } from 'react';

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const toggleVisibility = () => {
        if (window.pageYOffset > 20) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <>
            {isVisible && 
                <button onClick={scrollToTop} style={styles.buttonStyle}>
                    Top
                </button>
            }
        </>
    );
}

const styles = {
    buttonStyle: {
        display: 'block',
        position: 'fixed',
        bottom: '20px',
        right: '30px',
        zIndex: 99,
        border: 'none',
        outline: 'none',
        backgroundColor: '#E95420',
        color: 'white',
        cursor: 'pointer',
        padding: '10px',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        textAlign: 'center',
        lineHeight: '30px',
        fontSize: '18px',
        fontFamily: 'Ubuntu, Arial, sans-serif',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
    }
}


export default ScrollToTopButton;
