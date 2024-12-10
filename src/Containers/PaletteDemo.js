import React from 'react';
import {
    colorOne,
    colorTwo,
    colorThree,
    colorFour,
    colorFive,
    colorPoint,
    colorSuccess,
    fontOne,
    fontTwo,
    fontThree,
    fontFour,
    fontFive,
    fontSix,
    mainTextSize,
    subTextSize,
} from '../Styles/palette';

const PaletteDemo = () => {
    const colors = [
        { name: 'Color One', value: colorOne },
        { name: 'Color Two', value: colorTwo },
        { name: 'Color Three', value: colorThree },
        { name: 'Color Four', value: colorFour },
        { name: 'Color Five', value: colorFive },
        { name: 'Color Point', value: colorPoint },
        { name: 'Color Success', value: colorSuccess },
    ];

    const fonts = [
        { name: 'Font One', value: `${fontOne}px` },
        { name: 'Font Two', value: `${fontTwo}px` },
        { name: 'Font Three', value: `${fontThree}px` },
        { name: 'Font Four', value: `${fontFour}px` },
        { name: 'Font Five', value: `${fontFive}px` },
        { name: 'Font Six', value: `${fontSix}px` },
        { name: 'Main Text Size', value: `${mainTextSize}px` },
        { name: 'Sub Text Size', value: `${subTextSize}px` },
    ];

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ marginBottom: '20px' }}>Design System</h1>

            {/* Color Palette Section */}
            <section>
                <h2>Color Palette</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                    {colors.map((color, index) => (
                        <div
                            key={index}
                            style={{
                                width: '100px',
                                height: '100px',
                                backgroundColor: color.value,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: colorFour, // Neutral text color for visibility
                                border: `1px solid ${colorFour}`,
                            }}
                        >
                            <span style={{ fontSize: '12px' }}>{color.name}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Font Sizes Section */}
            <section style={{ marginTop: '30px' }}>
                <h2>Font Sizes</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {fonts.map((font, index) => (
                        <div key={index} style={{ fontSize: font.value }}>
                            {font.name} ({font.value})
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default PaletteDemo;