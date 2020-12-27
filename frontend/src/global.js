export const navbrand = {
    url: "/",
    label: "Stock Predictor"
};

export const companyNews = [
    {
      "category": "company news",
      "datetime": 1569550360,
      "headline": "More sops needed to boost electronic manufacturing: Top govt official More sops needed to boost electronic manufacturing: Top govt official.  More sops needed to boost electronic manufacturing: Top govt official More sops needed to boost electronic manufacturing: Top govt official",
      "id": 25286,
      "image": "https://img.etimg.com/thumb/msid-71321314,width-1070,height-580,imgsize-481831,overlay-economictimes/photo.jpg",
      "related": "AAPL",
      "source": "The Economic Times India",
      "summary": "NEW DELHI | CHENNAI: India may have to offer electronic manufacturers additional sops such as cheap credit and incentives for export along with infrastructure support in order to boost production and help the sector compete with China, Vietnam and Thailand, according to a top government official.These incentives, over and above the proposed reduction of corporate tax to 15% for new manufacturing units, are vital for India to successfully attract companies looking to relocate manufacturing facilities.“While the tax announcements made last week send a very good signal, in order to help attract investments, we will need additional initiatives,” the official told ET, pointing out that Indian electronic manufacturers incur 8-10% higher costs compared with other Asian countries.Sops that are similar to the incentives for export under the existing Merchandise Exports from India Scheme (MEIS) are what the industry requires, the person said.MEIS gives tax credit in the range of 2-5%. An interest subvention scheme for cheaper loans and a credit guarantee scheme for plant and machinery are some other possible measures that will help the industry, the official added.“This should be 2.0 (second) version of the electronic manufacturing cluster (EMC) scheme, which is aimed at creating an ecosystem with an anchor company plus its suppliers to operate in the same area,” he said.Last week, finance minister Nirmala Sitharaman announced a series of measures to boost economic growth including a scheme allowing any new manufacturing company incorporated on or after October 1, to pay income tax at 15% provided the company does not avail of any other exemption or incentives.",
      "url": "https://economictimes.indiatimes.com/industry/cons-products/electronics/more-sops-needed-to-boost-electronic-manufacturing-top-govt-official/articleshow/71321308.cms"
    },
    {
      "category": "company news",
      "datetime": 1569528720,
      "headline": "How to disable comments on your YouTube videos in 2 different ways",
      "id": 25287,
      "image": "https://amp.businessinsider.com/images/5d8d16182e22af6ab66c09e9-1536-768.jpg",
      "related": "AAPL",
      "source": "Business Insider",
      "summary": "You can disable comments on your own YouTube video if you don't want people to comment on it. It's easy to disable comments on YouTube by adjusting the settings for one of your videos in the beta or classic version of YouTube Studio. Visit Business Insider's homepage for more stories . The comments section has a somewhat complicated reputation for creators, especially for those making videos on YouTube . While it can be useful to get the unfiltered opinions of your YouTube viewers and possibly forge a closer connection with them, it can also open you up to quite a bit of negativity. So it makes sense that there may be times when you want to turn off the feature entirely. Just keep in mind that the action itself can spark conversation. If you decide that you don't want to let people leave comments on your YouTube video, here's how to turn off the feature, using either the classic or beta version of the creator studio: How to disable comments on YouTube in YouTube Studio (beta) 1. Go to youtube.com and log into your account, if necessary. 2.",
      "url": "https://www.businessinsider.com/how-to-disable-comments-on-youtube"
    },
    {
      "category": "company news",
      "datetime": 1569526180,
      "headline": "Apple iPhone 11 Pro Teardowns Look Encouraging for STMicro and Sony",
      "id": 25341,
      "image": "http://s.thestreet.com/files/tsc/v2008/photos/contrib/uploads/ba140938-d409-11e9-822b-fda891ce1fc1.png",
      "related": "AAPL",
      "source": "TheStreet",
      "summary": "STMicroelectronics and Sony each appear to be supplying four chips for Apple's latest flagship iPhones. Many other historical iPhone suppliers also make appearances in the latest teardowns….STM",
      "url": "https://realmoney.thestreet.com/investing/technology/iphone-11-pro-teardowns-look-encouraging-for-stmicro-sony-15105767"
    },
  ];

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