import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'
import 'jest-styled-components'

const initialTracksList = [
  {
    id: '3b22e3fd-3d12-4ad1-9e38-90314219c4f4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-perfect-img.png',
    name: 'Perfect',
    genre: 'Pop',
    duration: '4:04',
  },
  {
    id: '40f97965-ff45-469e-a635-b2ef9f1642ed',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-shape-of-you-img.png',
    name: 'Shape of You',
    genre: 'Divide',
    duration: '4:24',
  },
  {
    id: '782f916b-4056-44ec-a95f-5115c3f84904',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-visiting-hours.png',
    name: 'Visiting Hours',
    genre: 'Folk-Pop',
    duration: '3:49',
  },
  {
    id: 'fcf0dc77-3427-457c-9ee0-91b1dc39fece',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-shivers-img.png',
    name: 'Shivers',
    genre: 'Dance-Pop',
    duration: '3:58',
  },
  {
    id: '9c1bb890-d4d5-4edf-9d95-6959d716b442',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-bad-habits-img.png',
    name: 'Bad Habits',
    genre: 'Dance-Pop',
    duration: '4:01',
  },
  {
    id: '2216db9c-647f-4814-b880-179740e4d748',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-castle-on-the-hill-img.png',
    name: 'Castle on the Hill',
    genre: 'Pop&Rock',
    duration: '4:48',
  },
  {
    id: 'a5e30966-b760-4660-bf08-073135f7d010',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-happier-img.png',
    name: 'Happier',
    genre: 'Pop',
    duration: '3:36',
  },
  {
    id: '2d5c9bc0-b8b0-41c6-aa55-cb3b659d8604',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-photograph-img.png',
    name: 'Photograph',
    genre: 'Folk music',
    duration: '4:26',
  },
  {
    id: 'efd3d621-2c05-4941-acdc-0a1a0786bc53',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-galway-girl-img.png',
    name: 'Galway Girl',
    genre: 'Pop',
    duration: '3:20',
  },
  {
    id: 'e4b8e3b8-7776-4c09-8abc-ba328a8babe9',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-i-dont-care-img.png',
    name: "I Don't Care",
    genre: 'Pop',
    duration: '3:38',
  },
]

describe(':::RJSCE7HLQ1_TEST_SUITE_1:::Music Playlist Tests', () => {
  it(':::RJSCE7HLQ1_TEST_1:::Page should consist of at least two HTML list items rendered using a unique key as a prop to display trackItem from the initialTracksList:::10:::', () => {
    console.error = message => {
      if (
        /Each child in a list should have a unique "key" prop/.test(message) ||
        /Encountered two children with the same key/.test(message)
      ) {
        throw new Error(message)
      }
    }
    render(<App />)
    expect(screen.getAllByRole('listitem').length).toBeGreaterThanOrEqual(10)
  })

  it(':::RJSCE7HLQ1_TEST_2:::Page should consist of an HTML main heading element with text content as "Ed Sheeran":::5:::', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', {name: /Ed Sheeran/i, exact: false}),
    ).toBeInTheDocument()
  })

  it(':::RJSCE7HLQ1_TEST_3:::Page should consist of an HTML paragraph element with text content as "Singer":::5:::', () => {
    render(<App />)
    const paragraphEl = screen.getByText(/Singer/i, {
      exact: false,
    })

    expect(paragraphEl).toBeInTheDocument()
    expect(paragraphEl.tagName).toBe('P')
  })

  it(':::RJSCE7HLQ1_TEST_4:::Page should consist of an HTML main heading element with text content as "Songs Playlist":::5:::', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', {name: /Songs Playlist/i, exact: false}),
    ).toBeInTheDocument()
  })

  it(':::RJSCE7HLQ1_TEST_5:::Page should consist of an HTML input element with type attribute value as "search":::10:::', () => {
    render(<App />)
    expect(screen.getByRole('searchbox')).toBeInTheDocument()
  })

  it(':::RJSCE7HLQ1_TEST_6:::Page should consist of an HTML input element with placeholder text as "Search":::5:::', () => {
    render(<App />)
    expect(
      screen.getByPlaceholderText('Search', {
        exact: true,
      }),
    ).toBeInTheDocument()
  })
  it(':::RJSCE7HLQ1_TEST_7:::Page should consist of an HTML unordered list element to display the trackItems:::5:::', () => {
    render(<App />)
    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.getByRole('list').tagName).toBe('UL')
  })

  it(':::RJSCE7HLQ1_TEST_8:::Page should consist of at least ten HTML list elements to display the list of trackItems:::5:::', () => {
    render(<App />)
    expect(screen.getAllByRole('listitem').length).toBeGreaterThanOrEqual(10)
  })

  it(':::RJSCE7HLQ1_TEST_9:::Page should consist of an HTML image element with alt attribute value as "track" and src as the given image URL:::5:::', () => {
    render(<App />)
    const imageEl = screen.getAllByRole('img', {
      name: /track/i,
      exact: false,
    })
    initialTracksList.forEach((element, index) => {
      expect(imageEl[index]).toBeInTheDocument()
      expect(imageEl[index].src).toBe(element.imageUrl)
    })
  })

  it(':::RJSCE7HLQ1_TEST_10:::Page should consist of an HTML paragraph elements with text content as the values of the key "name" in each trackItem of given initialTracksList:::10:::', () => {
    render(<App />)
    const paragraphEl1 = screen.getByText(initialTracksList[0].name, {
      exact: false,
    })
    expect(paragraphEl1).toBeInTheDocument()
    expect(paragraphEl1.tagName).toBe('P')
    const paragraphEl2 = screen.getByText(initialTracksList[1].name, {
      exact: false,
    })
    expect(paragraphEl2).toBeInTheDocument()
    expect(paragraphEl2.tagName).toBe('P')
    const paragraphEl3 = screen.getByText(initialTracksList[2].name, {
      exact: false,
    })
    expect(paragraphEl3).toBeInTheDocument()
    expect(paragraphEl3.tagName).toBe('P')
    const paragraphEl4 = screen.getByText(initialTracksList[3].name, {
      exact: false,
    })
    expect(paragraphEl4).toBeInTheDocument()
    expect(paragraphEl4.tagName).toBe('P')
    const paragraphEl5 = screen.getByText(initialTracksList[4].name, {
      exact: false,
    })
    expect(paragraphEl5).toBeInTheDocument()
    expect(paragraphEl5.tagName).toBe('P')

    const paragraphEl6 = screen.getByText(initialTracksList[5].name, {
      exact: false,
    })
    expect(paragraphEl6).toBeInTheDocument()
    expect(paragraphEl6.tagName).toBe('P')
    const paragraphEl7 = screen.getByText(initialTracksList[6].name, {
      exact: false,
    })
    expect(paragraphEl7).toBeInTheDocument()
    expect(paragraphEl7.tagName).toBe('P')
    const paragraphEl8 = screen.getByText(initialTracksList[7].name, {
      exact: false,
    })
    expect(paragraphEl8).toBeInTheDocument()
    expect(paragraphEl8.tagName).toBe('P')
    const paragraphEl9 = screen.getByText(initialTracksList[8].name, {
      exact: false,
    })
    expect(paragraphEl9).toBeInTheDocument()
    expect(paragraphEl9.tagName).toBe('P')
    const paragraphEl10 = screen.getByText(initialTracksList[9].name, {
      exact: false,
    })
    expect(paragraphEl10).toBeInTheDocument()
    expect(paragraphEl10.tagName).toBe('P')
  })

  it(':::RJSCE7HLQ1_TEST_11:::Page should consist of an HTML paragraph elements with text content as the values of the key "genre" in each trackItem of given initialTracksList:::5:::', () => {
    render(<App />)
    initialTracksList.forEach(element => {
      const paragraphEl = screen.getAllByText(element.genre, {
        exact: false,
      })

      paragraphEl.forEach(item => {
        expect(item).toBeInTheDocument()
        expect(item.tagName).toBe('P')
      })
    })
  })

  it(':::RJSCE7HLQ1_TEST_12:::Page should consist of an HTML paragraph elements with text content as the values of the key "duration" in each trackItem of given initialTracksList:::5:::', () => {
    render(<App />)
    const paragraphEl1 = screen.getByText(initialTracksList[0].duration, {
      exact: false,
    })
    expect(paragraphEl1).toBeInTheDocument()
    expect(paragraphEl1.tagName).toBe('P')
    const paragraphEl2 = screen.getByText(initialTracksList[1].duration, {
      exact: false,
    })
    expect(paragraphEl2).toBeInTheDocument()
    expect(paragraphEl2.tagName).toBe('P')
    const paragraphEl3 = screen.getByText(initialTracksList[2].duration, {
      exact: false,
    })
    expect(paragraphEl3).toBeInTheDocument()
    expect(paragraphEl3.tagName).toBe('P')
    const paragraphEl4 = screen.getByText(initialTracksList[3].duration, {
      exact: false,
    })
    expect(paragraphEl4).toBeInTheDocument()
    expect(paragraphEl4.tagName).toBe('P')
    const paragraphEl5 = screen.getByText(initialTracksList[4].duration, {
      exact: false,
    })
    expect(paragraphEl5).toBeInTheDocument()
    expect(paragraphEl5.tagName).toBe('P')

    const paragraphEl6 = screen.getByText(initialTracksList[5].duration, {
      exact: false,
    })
    expect(paragraphEl6).toBeInTheDocument()
    expect(paragraphEl6.tagName).toBe('P')
    const paragraphEl7 = screen.getByText(initialTracksList[6].duration, {
      exact: false,
    })
    expect(paragraphEl7).toBeInTheDocument()
    expect(paragraphEl7.tagName).toBe('P')
    const paragraphEl8 = screen.getByText(initialTracksList[7].duration, {
      exact: false,
    })
    expect(paragraphEl8).toBeInTheDocument()
    expect(paragraphEl8.tagName).toBe('P')
    const paragraphEl9 = screen.getByText(initialTracksList[8].duration, {
      exact: false,
    })
    expect(paragraphEl9).toBeInTheDocument()
    expect(paragraphEl9.tagName).toBe('P')
    const paragraphEl10 = screen.getByText(initialTracksList[9].duration, {
      exact: false,
    })
    expect(paragraphEl10).toBeInTheDocument()
    expect(paragraphEl10.tagName).toBe('P')
  })

  it(':::RJSCE7HLQ1_TEST_13:::Page should consist of at least ten HTML button elements with data-testid as "delete":::5:::', () => {
    render(<App />)
    const btnEls = screen.getAllByTestId('delete')
    expect(btnEls.length).toBeGreaterThanOrEqual(10)
    expect(btnEls[0].tagName).toBe('BUTTON')
  })

  it(':::RJSCE7HLQ1_TEST_14:::When a non-empty value is provided in the search input element, then that text should be displayed in the search input element:::10:::', () => {
    render(<App />)
    userEvent.type(screen.getByRole('searchbox'), 'Shape of You')
    expect(screen.getByRole('searchbox')).toHaveValue('Shape of You')
  })

  it(':::RJSCE7HLQ1_TEST_15:::When a non-empty value is provided in the search input element, the trackItems should be filtered irrespective of the case:::10:::', () => {
    render(<App />)
    userEvent.type(screen.getByRole('searchbox'), 'sh')
    expect(screen.getByText(initialTracksList[1].name)).toBeInTheDocument()
    expect(screen.getByText(initialTracksList[3].name)).toBeInTheDocument()
  })

  it(':::RJSCE7HLQ1_TEST_16:::When a non-empty value is provided in the search input element, and no track item includes the value given in the search input, then the page should consist of an HTML paragraph element with text content as "No Songs Found" :::10:::', () => {
    render(<App />)
    userEvent.type(screen.getByRole('searchbox'), 'youtube')
    const paragraphEl = screen.getByText(/No Songs Found/i, {
      exact: false,
    })
    expect(paragraphEl).toBeInTheDocument()
    expect(paragraphEl.tagName).toBe('P')
  })

  it(':::RJSCE7HLQ1_TEST_17:::When an HTML button element with data-testid as "delete" of a track item is clicked, then the respective track item should be deleted:::10:::', () => {
    render(<App />)
    const btnEls = screen.getAllByTestId('delete')
    userEvent.click(btnEls[0])
    expect(
      screen.queryByText(initialTracksList[0].name, {exact: false}),
    ).not.toBeInTheDocument()
  })

  it(':::RJSCE7HLQ1_TEST_18:::When all track items are deleted, then the page should consist of an HTML paragraph element with text content as "No Songs Found":::10:::', () => {
    render(<App />)
    const btnEls = screen.getAllByTestId('delete')
    userEvent.click(btnEls[0])
    userEvent.click(btnEls[1])
    userEvent.click(btnEls[2])
    userEvent.click(btnEls[3])
    userEvent.click(btnEls[4])
    userEvent.click(btnEls[5])
    userEvent.click(btnEls[6])
    userEvent.click(btnEls[7])
    userEvent.click(btnEls[8])
    userEvent.click(btnEls[9])
    const paragraphEl = screen.getByText(/No Songs Found/i, {
      exact: false,
    })
    expect(paragraphEl).toBeInTheDocument()
    expect(paragraphEl.tagName).toBe('P')
  })
})
