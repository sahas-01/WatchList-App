import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core";

const darkTheme = createTheme({
    palette: {
        type: "dark",
    },
});

export default function BasicPagination({ setPage, numOfPages = 10 }) {
    // Scroll to top when page changes
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    };

    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                zIndex: 500,
                marginBottom: '3.75rem',
            }}
        >
            <ThemeProvider theme={darkTheme}>
                <Pagination
                    onChange={(e) => handlePageChange(e.target.textContent)}
                    count={numOfPages}
                    color="primary"
                    hideNextButton
                    hidePrevButton
                />
            </ThemeProvider>
        </div>
    );
}