import React, { useState, useEffect } from 'react';

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Attach the scroll event listener
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            // Clean up the listener when the component is unmounted
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
        backgroundColor: '#555',
        color: 'white',
        cursor: 'pointer',
        padding: '10px',
        borderRadius: '50%',  // Makes it circular
        width: '50px',  // Width of the circle
        height: '50px',  // Height of the circle
        textAlign: 'center',
        lineHeight: '30px',  // Centers the text/arrow inside the circle
        fontSize: '18px'
    }
}

export default ScrollToTopButton;
