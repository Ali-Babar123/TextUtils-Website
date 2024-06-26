

import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export class New extends Component {
  static defaultProps = {
    country: "in",
    category: "general"
  }
  static PropTypess = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }



  articles = [
    {
      "status": "ok",
      "totalResults": 37,
      "articles": [
        {
          "source": {
            "id": null,
            "name": "[Removed]"
          },
          "author": null,
          "title": "[Removed]",
          "description": "[Removed]",
          "url": "https://removed.com",
          "urlToImage": null,
          "publishedAt": "1970-01-01T00:00:00Z",
          "content": "[Removed]"
        },
        {
          "source": {
            "id": null,
            "name": "[Removed]"
          },
          "author": null,
          "title": "[Removed]",
          "description": "[Removed]",
          "url": "https://removed.com",
          "urlToImage": null,
          "publishedAt": "1970-01-01T00:00:00Z",
          "content": "[Removed]"
        },
        {
          "source": {
            "id": "associated-press",
            "name": "Associated Press"
          },
          "author": "MICHAEL PHILLIS",
          "title": "PFAS: EPA's new rules require utilities to reduce toxic chemicals in drinking water - The Associated Press",
          "description": "The Environmental Protection Agency on Wednesday announced its first-ever limits for several common types of PFAS, or perfluoroalkyl and polyfluoroalkyl substances. Two types, PFOA and PFOS, will be limited to 4 parts per trillion, the lowest level that tests…",
          "url": "https://apnews.com/article/forever-chemicals-pfas-pollution-epa-drinking-water-1c8804288413a73bb7b99fc866c8fa51",
          "urlToImage": "https://dims.apnews.com/dims4/default/8eb60ff/2147483647/strip/true/crop/5413x3045+0+282/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F18%2F7f%2Fc533b155738fd022865095843ca9%2Fdf7f192a912e4d469976d3b286936c51",
          "publishedAt": "2024-04-10T09:06:28Z",
          "content": "The Biden administration on Wednesday finalized strict limits on certain so-called forever chemicals in drinking water that will require utilities to reduce them to the lowest level they can be relia… [+7149 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "BBC News"
          },
          "author": null,
          "title": "Italian explosion: Search after deadly blast at power plant - BBC.com",
          "description": "Three people are dead and several missing after a fire at a hydroelectric plant near Bologna.",
          "url": "https://www.bbc.com/news/world-europe-68761493",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/12CDD/production/_133112077_vigili2.png",
          "publishedAt": "2024-04-10T07:58:10Z",
          "content": null
        },
        {
          "source": {
            "id": null,
            "name": "The Athletic"
          },
          "author": "Eric Nehm",
          "title": "Giannis Antetokounmpo's injury casts a dark cloud over Bucks' win against Celtics - The Athletic",
          "description": "The Bucks' All-Star power forward crumpled to the Fiserv Forum floor without contact with another player in the third quarter.",
          "url": "https://theathletic.com/5404588/2024/04/10/giannis-antetokounmpo-injury-calf-recovery-bucks/",
          "urlToImage": "https://cdn.theathletic.com/app/uploads/2024/04/10002206/240410-Giannis-scaled-e1712722995337.jpg",
          "publishedAt": "2024-04-10T07:37:15Z",
          "content": "MILWAUKEE Until 3:40 remaining in the third quarter of Tuesdays game against the Boston Celtics, things were going well for the Milwaukee Bucks. In the middle of a four-game losing streak, the Bucks … [+6177 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "SciTechDaily"
          },
          "author": null,
          "title": "Unraveling the Rapid Aging Mystery Behind Early-Onset Cancers - SciTechDaily",
          "description": "Study finds accelerated aging tied to increased early-onset cancer risk, urging research into preventive measures tailored to biological age. Accelerated aging was more common in recent birth cohorts and was associated with increased incidence of early-onset …",
          "url": "https://scitechdaily.com/unraveling-the-rapid-aging-mystery-behind-early-onset-cancers/",
          "urlToImage": "https://scitechdaily.com/images/Cancer-Science-Aging-Concept.jpg",
          "publishedAt": "2024-04-10T07:23:50Z",
          "content": "Accelerated aging in younger populations has been associated with a higher incidence of early-onset cancers, particularly lung, gastrointestinal, and uterine cancers, pointing towards the importance … [+4123 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "CNBC"
          },
          "author": "Arjun Kharpal",
          "title": "TSMC posts fastest monthly revenue growth since 2022 on AI chip boom - CNBC",
          "description": "TSMC posted a surge in revenue in March as it cashes in on a continuing artificial intelligence boom powered by high-end chips.",
          "url": "https://www.cnbc.com/2024/04/10/tsmc-posts-fastest-monthly-revenue-growth-since-2022-on-ai-chip-boom.html",
          "urlToImage": "https://image.cnbcfm.com/api/v1/image/107275966-1690260911095-gettyimages-1541927779-porzycki-computer230719_npbb8.jpeg?v=1712731033&w=1920&h=1080",
          "publishedAt": "2024-04-10T06:51:25Z",
          "content": "Taiwan Semiconductor Manufacturing Co. (TMSC), posted a surge in monthly revenue in March, as it cashed in on a continuing artificial intelligence boom powered by high-end chips.\r\nTSMC said March rev… [+1100 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "BBC News"
          },
          "author": null,
          "title": "World of Warcraft: Popular game to return to China - BBC.com",
          "description": "China's NetEase and games publisher Activision Blizzard end their feud which had angered fans.",
          "url": "https://www.bbc.com/news/articles/czq5xyj2dw2o",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/f4e6/live/b7d47320-f6f8-11ee-91a1-f3f970b1833b.jpg",
          "publishedAt": "2024-04-10T05:08:20Z",
          "content": null
        },
        {
          "source": {
            "id": "bleacher-report",
            "name": "Bleacher Report"
          },
          "author": "Timothy Rapp",
          "title": "LeBron, Lakers' Loss to Steph Curry, Warriors Disappoints Fans amid NBA Playoff Push - Bleacher Report",
          "description": "Sometimes it just isn't your night. Unfortunately for the Los Angeles Lakers, it isn't the ideal time in the season to have that kind of game. With Anthony…",
          "url": "https://bleacherreport.com/articles/10116250-lebron-lakers-loss-to-steph-curry-warriors-disappoints-fans-amid-nba-playoff-push",
          "urlToImage": "https://media.bleacherreport.com/image/upload/x_0,y_200,w_1800,h_1200,c_crop/c_fill,g_faces,w_3800,h_2000,q_95/v1712723855/qqyr0ulcsxkordluav4l.jpg",
          "publishedAt": "2024-04-10T04:45:22Z",
          "content": "Andrew D. Bernstein/NBAE via Getty Images\r\nSometimes it just isn't your night. Unfortunately for the Los Angeles Lakers, it isn't the ideal time in the season to have that kind of game.\r\nWith Anthony… [+4072 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Fitch Ratings"
          },
          "author": null,
          "title": "Fitch Revises Outlook on China to Negative; Affirms at 'A+' - Fitch Ratings",
          "description": null,
          "url": "https://www.fitchratings.com/research/sovereigns/fitch-revises-outlook-on-china-to-negative-affirms-at-a-09-04-2024",
          "urlToImage": null,
          "publishedAt": "2024-04-10T03:39:00Z",
          "content": null
        },
        {
          "source": {
            "id": "reuters",
            "name": "Reuters"
          },
          "author": "Reuters",
          "title": "Arizona's top court revives 19th century abortion ban - Reuters",
          "description": null,
          "url": "https://www.reuters.com/world/us/arizonas-top-court-revives-19th-century-abortion-ban-2024-04-09/",
          "urlToImage": null,
          "publishedAt": "2024-04-10T03:20:00Z",
          "content": null
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "Wayne Chang",
          "title": "Taiwan’s Taroko National Park closed ‘until further notice’ following earthquake - CNN",
          "description": "The Taroko National Park in eastern Taiwan will close until further notice after the island was struck by the strongest earthquake in 25 years.",
          "url": "https://www.cnn.com/travel/taiwan-taroko-national-park-closed-earthquake-intl-hnk/index.html",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2132892333.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2024-04-10T03:01:00Z",
          "content": "The Taroko National Park in eastern Taiwan, a popular destination for domestic and international tourists alike, will close until further notice, after the island was struck by the strongest earthqua… [+1532 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "New York Post"
          },
          "author": "Aneeta Bhole",
          "title": "Missouri death row inmate Brian Dorsey executed 18 years after killing cousin, her husband: 'Deeply, overwhelmingly sorry' - New York Post ",
          "description": "Brian Dorsey, 52, apologized for the brutal murder of his cousin Sarah Bonnie and her husband Ben during his Tuesday execution.",
          "url": "https://nypost.com/2024/04/09/us-news/brian-dorsey-executed-18-years-after-killing-cousin-her-husband/",
          "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2024/04/missouri-death-row-inmate-brian-79788773.jpg?quality=75&strip=all&w=1024",
          "publishedAt": "2024-04-10T02:43:00Z",
          "content": "A Missouri death row inmate who killed his cousin and her husband before assaulting her apologized to his family for the atrocities he committed before he was executed Tuesday.\r\nBrian Dorsey, 52, was… [+2858 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Entertainment Tonight"
          },
          "author": "Zach Seemayer",
          "title": "Wynonna Judd's Daughter Grace Kelley Arrested for Allegedly Exposing Herself on a Highway - Entertainment Tonight",
          "description": "The singer's 27-year-old daughter was taken into custody in Alabama on April 5.",
          "url": "https://www.etonline.com/wynonna-judds-daughter-grace-kelley-arrested-for-allegedly-exposing-herself-on-a-highway-223160",
          "urlToImage": "https://www.etonline.com/sites/default/files/styles/1280x720/public/images/2023-11/judd.jpg?h=c673cd1c",
          "publishedAt": "2024-04-10T02:41:31Z",
          "content": "Wynonna Judd's daughter, Grace Kelley, was arrested in Alabama on Friday after allegedly exposing herself on a public highway.\r\nAccording to police records obtained by ET, Kelley, 27, was booked at t… [+2398 chars]"
        },
        {
          "source": {
            "id": "cnn",
            "name": "CNN"
          },
          "author": "",
          "title": "Maggie Haberman reacts to Trump’s abortion statement - CNN",
          "description": "Just one day before Arizona’s Supreme Court ruled the state must adhere to a century-old law banning nearly all abortions, former President Donald Trump said that abortion rights should be left to the states, offering his clearest stance yet. New York Times r…",
          "url": "https://www.cnn.com/videos/politics/2024/04/10/haberman-trump-abortion-ban-federal-state-ac360-vpx.cnn",
          "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/240409205222-haberman.jpg?c=16x9&q=w_800,c_fill",
          "publishedAt": "2024-04-10T02:37:07Z",
          "content": null
        },
        {
          "source": {
            "id": "usa-today",
            "name": "USA Today"
          },
          "author": "Michael Loria",
          "title": "Seatbelt check: Cops fired 96 shots at Black motorist, killing him - USA TODAY",
          "description": "A Chicago family and the city's watchdog police agency say that the fatal shooting of a Black motorist over a seatbelt violation leaves \"grave\" doubts.",
          "url": "https://www.usatoday.com/story/news/nation/2024/04/09/seatbelt-check-cops-fired-96-shots-at-black-motorist-killing-him/73265324007/",
          "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/03/21/USAT/73060910007-1325068736.jpg?crop=2999,1687,x0,y156&width=2999&height=1687&format=pjpg&auto=webp",
          "publishedAt": "2024-04-10T02:33:15Z",
          "content": "CHICAGO For Sheila Banks, the late afternoon of March 21 began easy, with her son Dexter Reed heading out to enjoy his new SUV. Momma, Im going out for a ride, she recalled Tuesday.\r\nIt ended with Re… [+7970 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Eonline.com"
          },
          "author": "Leah Degrazia",
          "title": "Oliver Hudson and Robyn Lively Confess They Envy Sisters Kate Hudson and Blake Lively for This Reason - E! Online - E! NEWS",
          "description": "Oliver Hudson and Robyn Lively admitted to being jealous of their famous sisters Kate Hudson and Blake Lively when it comes to the opportunities their fame has afforded them.",
          "url": "https://www.eonline.com/news/1399164/oliver-hudson-and-robyn-lively-confess-they-envy-sisters-kate-hudson-and-blake-lively-for-this-reason",
          "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/202439/rs_1200x1200-240409173428-robyn_lively_oliver_hudson.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
          "publishedAt": "2024-04-10T02:27:00Z",
          "content": "Sometimes Oliver Hudson and Robyn Lively wish they were almost\r\n more famous. \r\nThe Rules of Engagement alum and Teen Witch star have watched their sistersKate Hudson and Blake Lively, respectivelybe… [+830 chars]"
        },
        {
          "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
          },
          "author": "Jacqueline Alemany, Leigh Ann Caldwell, Liz Goodwin",
          "title": "Mayorkas impeachment trial delayed until next week - The Washington Post",
          "description": "Conservative senators balked at starting an impeachment trial on the day the upper chamber planned to leave town.",
          "url": "https://www.washingtonpost.com/nation/2024/04/09/mayorkas-impeachment-senate-trial-immigration-republicans/",
          "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/VRMT3HKVINCE7IFCSSJJE3WNAU.JPG&w=1440",
          "publishedAt": "2024-04-10T01:15:40Z",
          "content": "House Speaker Mike Johnson (R-La.) delayed until Monday the impeachment trial of the first sitting Cabinet member in history, responding to the concern of some conservatives worried about launching a… [+9680 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "KLAS - 8 News Now"
          },
          "author": "Vanessa Murphy, David Charns",
          "title": "Mother was concerned about safety before Las Vegas law office shooting, documents reveal - KLAS - 8 News Now",
          "description": "LAS VEGAS (KLAS) — Text messages, an email and a surveillance report reviewed by the 8 News Now Investigators reveal more about a bitter custody battle that resulted in a deadly shooting inside a Las Vegas law office.",
          "url": "https://www.8newsnow.com/investigators/mother-was-concerned-about-safety-before-las-vegas-law-office-shooting-documents-reveal/",
          "urlToImage": "https://www.8newsnow.com/wp-content/uploads/sites/59/2024/04/My-project-2024-04-09T172755.155.png?w=1280",
          "publishedAt": "2024-04-10T01:00:50Z",
          "content": "Woman shot, killed by ex-father-in-law during deposition in Las Vegas law office filed for sole custody morning of shooting: sourcesLAS VEGAS (KLAS) — Text messages, an email and a surveillance repor… [+4392 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "DW (English)"
          },
          "author": "Deutsche Welle",
          "title": "Nobel Prize-winning physicist Peter Higgs dies, aged 94 - DW (English)",
          "description": "The professor who proposed the existence of the so-called \"God particle\" that helped explain how matter formed after the Big Bang, died on Monday following a short illness.",
          "url": "https://www.dw.com/en/nobel-prize-winning-physicist-peter-higgs-dies-aged-94/a-68780280",
          "urlToImage": "https://static.dw.com/image/68780265_6.jpg",
          "publishedAt": "2024-04-10T00:52:31Z",
          "content": "The man who gave rise to the \"God particle\" that helped explain how matter formed after the Big Bang, Peter Higgs, has died at age 94, the University of Edinburgh said Tuesday.\r\nThe physicist gained … [+2096 chars]"
        }
      ]
    }
  ]
  capitlizeText = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    // Intial current state
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
      totalResults: 0
    }
    document.title = `${this.capitlizeText(this.props.category)} - MonkeyNews`;
  }
  // using fetch API
  async componentDidMount() {
     this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=26bbb64bba904f3b88e182ccf61cf098&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    this.props.setProgress(100);

  }
  handlePrevious = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=26bbb64bba904f3b88e182ccf61cf098&page=${this.state.page - 1}
    &pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log("Next");
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false
    })

  }
  handleNext = async () => {
    console.log("Next");
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=26bbb64bba904f3b88e182ccf61cf098&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true })
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        loading: false

      })
    }
    // we concatenate in articles
    fetchMoreData = async () => {
    this.setState({page: this.state.page + 1});
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=26bbb64bba904f3b88e182ccf61cf098&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ 
      articles: this.state.articles.concat(parsedData.articles),
       totalResults: parsedData.totalResults, 
       loading: false })
  }
    };
  render() {
    return (
         <>
        <h2 className='text-center' style={{ margin: "35px",marginTop: "90px" ,fontFamily: "sans-serif", color: "lightgreen", fontWeight: "600" }}>NewsMonkey - Top {this.capitlizeText(this.props.category)}<br></br> Headlines</h2>
        {/* {this.state.loading && <Spinner/>} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={this.state.loading && <Spinner/>}
        >
          <div className="container">
            
          
          <div className="row">
            {!this.state.loading && this.state.articles.map((elememt) => {
              return <div className="col-md-4" >
                <NewsItem title={elememt.title?elememt.title:""} description={elememt.description?elememt.description:""} imgUrl={elememt.urlToImage} newsUrl={elememt.url}
                  author={elememt.author} date={elememt.publishedAt} source={elememt.source.name} />
              </div>
            })}
            </div>
          </div>
        
          </InfiniteScroll>
          {/* <div className="container d-flex justify-content-between" style={{ padding: "5px", margin: "20px" }}>
            <button disabled={this.state.page <= 1} className="btn btn-primary" onClick={this.handlePrevious}>&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-primary" onClick={this.handleNext}>Next &rarr;</button>
          </div> */}
      </>
    )
  }
}

export default New