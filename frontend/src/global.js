export const NEWS_API_URL = "/getNews?company=";

export const navbrand = {
    url: "/",
    label: "Stock Predictor"
};

export const navlinks = [
    {
        url: "https://github.com/Codubee/StockPredictionMW2-4",
        label: "Github"
    },
    {
        url: "/input",
        label: "User input"
    },
    {
        url: "/",
        label: "Landing page"
    },
];

export const stockData = [
    {
        "c": 261.74,
        "High Price": 263.31,
        "Low Price": 260.68,
        "Open Price": 261.07,
        "t": 1582641000 
    },
    {
        "c": 261.74,
        "High Price": 263.31,
        "Low Price": 260.68,
        "Open Price": 261.07,
        "t": 1582641000 
    },
];

export const featuresArray = [
    {
        "feature":"Guess Price of Stock",
        "desc":"We will guess if the price of a stock is going to increase or decrease based on recent news articles about the company"

    },
    {
        "feature":"Stock information",
        "desc":"We will give you the current price of a stock"
    },
    {
        "feature":"Stock News Information",
        "desc":"We will give you recent news on a stock of your choosing"
    },
    {
        "feature":"Weather",
        "desc":"We show you the weather in your area"
    }
]

/**
 * Checks that the component has been rendered.
 * 
 * @param {any} wrapper Shallow wrapper.
 */
export function hasBeenRendered(wrapper) {
    expect(wrapper.exists()).toBeTruthy();
}