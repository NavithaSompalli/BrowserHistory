import {Component} from 'react'

import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {
    searchInput: '',
    initialBrowserHistoryList: initialHistoryList,
  }

  onChangeSearchResults = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteHistoryItem = id => {
    const {initialBrowserHistoryList} = this.state
    console.log(id)

    const newBrowserData = initialBrowserHistoryList.filter(
      history => history.id === id,
    )

    this.setState({
      initialBrowserHistoryList: newBrowserData,
    })
  }

  renderBrowserHistory = () => {
    const {initialBrowserHistoryList, searchInput} = this.state

    const searchResults = initialBrowserHistoryList.filter(history =>
      history.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    if (searchResults.length !== 0) {
      return (
        <ul>
          {searchResults.map(eachItem => (
            <li className="list-container" key={eachItem.id}>
              <div className="browser-history-item">
                <p className="time">{eachItem.timeAccessed}</p>

                <img
                  src={eachItem.logoUrl}
                  alt="domain logo"
                  className="domain-logo"
                />

                <p className="domain-title">{eachItem.title}</p>
                <p className="domain-url">{eachItem.domainUrl}</p>
              </div>
              <button
                type="button"
                className="delete-btn"
                onClick={this.deleteHistoryItem}
                value={eachItem.id}
                testid="delete"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                  alt="delete"
                  className="delete-logo"
                />
              </button>
            </li>
          ))}
        </ul>
      )
    }

    return (
      <div className="no-history-container">
        <p className="no-history-heading">There is no history to show</p>
      </div>
    )
  }

  render() {
    return (
      <div className="app-container">
        <nav className="navbarContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="website-logo"
          />
          <div className="search-input-container">
            <div className="search-img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </div>
            <div>
              <input
                type="search"
                className="search-input-element"
                placeholder="Search history"
                onChange={this.onChangeSearchResults}
                value={this.searchInput}
              />
            </div>
          </div>
        </nav>
        <div className="history-container">{this.renderBrowserHistory()}</div>
      </div>
    )
  }
}

export default App
