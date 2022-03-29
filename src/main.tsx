import React from 'react';
import ReactDOM from 'react-dom';
import Page from '@components/page';
import GlobalStyle from '@assets/styles/global-styles';
import { ThemeProvider } from 'styled-components';

const theme = {
    color: {
        primary: {
            softCyan: "hsl(174, 77%, 80%)", //Full slider Bar
            strongCyan: "hsl(174, 86%, 45%)", //Slider Background
            cyan: "#78EBDC",
            darkCyan: "#22AEA1", //Focused Thumb
            lightGrayishRed: "hsl(14, 92%, 95%)", //Discount Background
            lightRed: "hsl(15, 100%, 70%)", // Discount Text
            paleBlue: "hsl(226, 100%, 87%)", //CTA Text
            badge: "#FFEDE8", // Badge
        },
        neutral: {
            white: "hsl(0, 0%, 100%)", //Pricing Component Background
            veryPaleBlue: "hsl(230, 100%, 99%)", //Main Background
            veryLightGrayishBlue: "hsl(224, 65%, 95%)", //Empty Slider Bar
            lightGrayishBlue: "hsl(223, 50%, 87%)", //Toggle Background
            grayishBlue: "hsl(225, 20%, 60%)", //Text
            darkDesaturatedBlue: "hsl(227, 35%, 25%)", //Text & CTA Background
        },
    },
}

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <Page />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
