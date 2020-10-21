import React, { useReducer } from 'react';

import { addTrackAction } from './add-track.action';
import { getTracksAction } from './get-tracks.action';
import { deleteTrackAction } from './delete-track.action';
import { searchTracksAction } from './search-track.action';

const initialState = {
    track_list: [
        { track: {
                track_id: 201234497,
                track_name: 'WAP (feat. Megan Thee Stallion)',
                track_name_translation_list: [],
                track_rating: 99,
                commontrack_id: 114611205,
                instrumental: 0,
                explicit: 1,
                has_lyrics: 1,
                has_subtitles: 1,
                has_richsync: 1,
                num_favourite: 714,
                album_id: 39576526,
                album_name: 'WAP (feat. Megan Thee Stallion)',
                artist_id: 46196205,
                artist_name: 'Cardi B feat. Megan Thee Stallion',
                track_share_url: 'https://www.musixmatch.com/lyrics/Cardi-B-Megan-Thee-Stallion/WAP-Megan-Thee-Stallion?utm_source=application&utm_campaign=api&utm_medium=rhythm%3A1409620732633',
                track_edit_url: 'https://www.musixmatch.com/lyrics/Cardi-B-Megan-Thee-Stallion/WAP-Megan-Thee-Stallion/edit?utm_source=application&utm_campaign=api&utm_medium=rhythm%3A1409620732633',
                restricted: 0,
                updated_time: '2020-10-10T10:41:53Z',
                primary_genres: {
                    music_genre_list: [
                        {
                            music_genre: {
                                music_genre_id: 34,
                                music_genre_parent_id: 0,
                                music_genre_name: 'Music',
                                music_genre_name_extended: 'Music',
                                music_genre_vanity: 'Music'
                            }
                        }
                    ]
                }
            } },
        { track: {
                track_id: 201621042,
                track_name: 'Dynamite',
                track_name_translation_list: [],
                track_rating: 99,
                commontrack_id: 114947355,
                instrumental: 0,
                explicit: 0,
                has_lyrics: 1,
                has_subtitles: 1,
                has_richsync: 1,
                num_favourite: 2600,
                album_id: 39721115,
                album_name: 'Dynamite - Single',
                artist_id: 24410130,
                artist_name: 'BTS',
                track_share_url: 'https://www.musixmatch.com/lyrics/BTS/Dynamite?utm_source=application&utm_campaign=api&utm_medium=rhythm%3A1409620732633',
                track_edit_url: 'https://www.musixmatch.com/lyrics/BTS/Dynamite/edit?utm_source=application&utm_campaign=api&utm_medium=rhythm%3A1409620732633',
                restricted: 0,
                updated_time: '2020-08-27T20:07:51Z',
                primary_genres: {
                    music_genre_list: [
                        {
                            music_genre: {
                                music_genre_id: 14,
                                music_genre_parent_id: 34,
                                music_genre_name: 'Pop',
                                music_genre_name_extended: 'Pop',
                                music_genre_vanity: 'Pop'
                            }
                        }
                    ]
                }
            } },
        { track: {
                track_id: 200360817,
                track_name: 'Mood (feat. iann dior)',
                track_name_translation_list: [],
                track_rating: 99,
                commontrack_id: 113838056,
                instrumental: 0,
                explicit: 1,
                has_lyrics: 1,
                has_subtitles: 1,
                has_richsync: 1,
                num_favourite: 165,
                album_id: 39278869,
                album_name: 'Mood (feat. iann dior) - Single',
                artist_id: 46038964,
                artist_name: '24kGoldn feat. iann dior',
                track_share_url: 'https://www.musixmatch.com/lyrics/24kGoldn-iann-dior/Mood-Iann-Dior?utm_source=application&utm_campaign=api&utm_medium=rhythm%3A1409620732633',
                track_edit_url: 'https://www.musixmatch.com/lyrics/24kGoldn-iann-dior/Mood-Iann-Dior/edit?utm_source=application&utm_campaign=api&utm_medium=rhythm%3A1409620732633',
                restricted: 0,
                updated_time: '2020-10-01T07:39:12Z',
                primary_genres: {
                    music_genre_list: []
                }
            } },
        { track: {
                track_id: 201257482,
                track_name: 'What Do You Think Of?',
                track_name_translation_list: [],
                track_rating: 98,
                commontrack_id: 114634472,
                instrumental: 0,
                explicit: 1,
                has_lyrics: 1,
                has_subtitles: 1,
                has_richsync: 1,
                num_favourite: 60,
                album_id: 39582525,
                album_name: 'Getting Over Him',
                artist_id: 46254096,
                artist_name: 'Lauren Alaina feat. Lukas Graham',
                track_share_url: 'https://www.musixmatch.com/lyrics/Lauren-Alaina/What-Do-You-Think-Of?utm_source=application&utm_campaign=api&utm_medium=rhythm%3A1409620732633',
                track_edit_url: 'https://www.musixmatch.com/lyrics/Lauren-Alaina/What-Do-You-Think-Of/edit?utm_source=application&utm_campaign=api&utm_medium=rhythm%3A1409620732633',
                restricted: 0,
                updated_time: '2020-09-04T12:25:27Z',
                primary_genres: {
                    music_genre_list: []
                }
            } },
        { track: {
                track_id: 194169151,
                track_name: 'Blinding Lights',
                track_name_translation_list: [],
                track_rating: 99,
                commontrack_id: 104185748,
                instrumental: 0,
                explicit: 0,
                has_lyrics: 1,
                has_subtitles: 1,
                has_richsync: 1,
                num_favourite: 6682,
                album_id: 37216011,
                album_name: 'After Hours',
                artist_id: 13937035,
                artist_name: 'The Weeknd',
                track_share_url: 'https://www.musixmatch.com/lyrics/The-Weeknd-3/Blinding-Lights?utm_source=application&utm_campaign=api&utm_medium=rhythm%3A1409620732633',
                track_edit_url: 'https://www.musixmatch.com/lyrics/The-Weeknd-3/Blinding-Lights/edit?utm_source=application&utm_campaign=api&utm_medium=rhythm%3A1409620732633',
                restricted: 0,
                updated_time: '2020-08-01T10:12:06Z',
                primary_genres: {
                    music_genre_list: [
                        {
                            music_genre: {
                                music_genre_id: 7,
                                music_genre_parent_id: 34,
                                music_genre_name: 'Electronic',
                                music_genre_name_extended: 'Electronic',
                                music_genre_vanity: 'Electronic'
                            }
                        }
                    ]
                }
            } },
        { track: {
                track_id: 201279280,
                track_name: 'Midnight Sky',
                track_name_translation_list: [],
                track_rating: 99,
                commontrack_id: 114669898,
                instrumental: 0,
                explicit: 1,
                has_lyrics: 1,
                has_subtitles: 1,
                has_richsync: 1,
                num_favourite: 277,
                album_id: 39588114,
                album_name: 'Heart Of Glass / Midnight Sky',
                artist_id: 224210,
                artist_name: 'Miley Cyrus',
                track_share_url: 'https://www.musixmatch.com/lyrics/Miley-Cyrus/Midnight-Sky?utm_source=application&utm_campaign=api&utm_medium=rhythm%3A1409620732633',
                track_edit_url: 'https://www.musixmatch.com/lyrics/Miley-Cyrus/Midnight-Sky/edit?utm_source=application&utm_campaign=api&utm_medium=rhythm%3A1409620732633',
                restricted: 0,
                updated_time: '2020-08-27T07:52:34Z',
                primary_genres: {
                    music_genre_list: [
                        {
                            music_genre: {
                                music_genre_id: 34,
                                music_genre_parent_id: 0,
                                music_genre_name: 'Music',
                                music_genre_name_extended: 'Music',
                                music_genre_vanity: 'Music'
                            }
                        }
                    ]
                }
            } },
        { track: {
                track_id: 198472203,
                track_name: 'I Hope (feat. Charlie Puth)',
                track_name_translation_list: [],
                track_rating: 98,
                commontrack_id: 110047550,
                instrumental: 0,
                explicit: 0,
                has_lyrics: 1,
                has_subtitles: 1,
                has_richsync: 1,
                num_favourite: 63,
                album_id: 38635289,
                album_name: 'Goldmine',
                artist_id: 45088972,
                artist_name: 'Gabby Barrett feat. Charlie Puth',
                track_share_url: 'https://www.musixmatch.com/lyrics/Gabby-Barrett/I-Hope-Charlie-Puth?utm_source=application&utm_campaign=api&utm_medium=rhythm%3A1409620732633',
                track_edit_url: 'https://www.musixmatch.com/lyrics/Gabby-Barrett/I-Hope-Charlie-Puth/edit?utm_source=application&utm_campaign=api&utm_medium=rhythm%3A1409620732633',
                restricted: 0,
                updated_time: '2020-06-24T10:14:37Z',
                primary_genres: {
                    music_genre_list: [
                        {
                            music_genre: {
                                music_genre_id: 34,
                                music_genre_parent_id: 0,
                                music_genre_name: 'Music',
                                music_genre_name_extended: 'Music',
                                music_genre_vanity: 'Music'
                            }
                        }
                    ]
                }
            } },
        { track: {
                track_id: 198421234,
                track_name: 'Savage Love (Laxed - Siren Beat)',
                track_name_translation_list: [],
                track_rating: 99,
                commontrack_id: 112136372,
                instrumental: 0,
                explicit: 1,
                has_lyrics: 1,
                has_subtitles: 1,
                has_richsync: 1,
                num_favourite: 1110,
                album_id: 38617941,
                album_name: 'Savage Love (Laxed - Siren Beat) - Single',
                artist_id: 45643815,
                artist_name: 'Jawsh 685 feat. Jason Derulo',
                track_share_url: 'https://www.musixmatch.com/lyrics/Jawsh-685-Jason-Derulo/Savage-Love-Laxed-Siren-Beat?utm_source=application&utm_campaign=api&utm_medium=rhythm%3A1409620732633',
                track_edit_url: 'https://www.musixmatch.com/lyrics/Jawsh-685-Jason-Derulo/Savage-Love-Laxed-Siren-Beat/edit?utm_source=application&utm_campaign=api&utm_medium=rhythm%3A1409620732633',
                restricted: 0,
                updated_time: '2020-08-01T10:04:40Z',
                primary_genres: {
                    music_genre_list: [
                        {
                            music_genre: {
                                music_genre_id: 1119,
                                music_genre_parent_id: 12,
                                music_genre_name: 'Latin Urban',
                                music_genre_name_extended: 'Latin / Latin Urban',
                                music_genre_vanity: 'Latin-Latin-Urban'
                            }
                        },
                        {
                            music_genre: {
                                music_genre_id: 1183,
                                music_genre_parent_id: 24,
                                music_genre_name: 'Dancehall',
                                music_genre_name_extended: 'Reggae / Dancehall',
                                music_genre_vanity: 'Reggae-Dancehall'
                            }
                        }
                    ]
                }
            } },
        { track: {
                track_id: 189626475,
                track_name: 'Watermelon Sugar',
                track_name_translation_list: [],
                track_rating: 99,
                commontrack_id: 104939195,
                instrumental: 0,
                explicit: 0,
                has_lyrics: 1,
                has_subtitles: 1,
                has_richsync: 1,
                num_favourite: 992,
                album_id: 36101498,
                album_name: 'Fine Line',
                artist_id: 24505463,
                artist_name: 'Harry Styles',
                track_share_url: 'https://www.musixmatch.com/lyrics/Harry-Styles/Watermelon-Sugar-2?utm_source=application&utm_campaign=api&utm_medium=rhythm%3A1409620732633',
                track_edit_url: 'https://www.musixmatch.com/lyrics/Harry-Styles/Watermelon-Sugar-2/edit?utm_source=application&utm_campaign=api&utm_medium=rhythm%3A1409620732633',
                restricted: 0,
                updated_time: '2019-12-12T16:57:16Z',
                primary_genres: {
                    music_genre_list: [
                        {
                            music_genre: {
                                music_genre_id: 1139,
                                music_genre_parent_id: 15,
                                music_genre_name: 'Funk',
                                music_genre_name_extended: 'R&B/Soul / Funk',
                                music_genre_vanity: 'R-B-Soul-Funk'
                            }
                        },
                        {
                            music_genre: {
                                music_genre_id: 100020,
                                music_genre_parent_id: 20,
                                music_genre_name: 'Indie Pop',
                                music_genre_name_extended: 'Alternative / Indie Pop',
                                music_genre_vanity: 'Alternative-Indie-Pop'
                            }
                        },
                        {
                            music_genre: {
                                music_genre_id: 14,
                                music_genre_parent_id: 34,
                                music_genre_name: 'Pop',
                                music_genre_name_extended: 'Pop',
                                music_genre_vanity: 'Pop'
                            }
                        },
                        {
                            music_genre: {
                                music_genre_id: 21,
                                music_genre_parent_id: 34,
                                music_genre_name: 'Rock',
                                music_genre_name_extended: 'Rock',
                                music_genre_vanity: 'Rock'
                            }
                        }
                    ]
                }
            } },
        { track: {
                track_id: 188323103,
                track_name: 'Got What I Got',
                track_name_translation_list: [],
                track_rating: 1,
                commontrack_id: 103596792,
                instrumental: 0,
                explicit: 1,
                has_lyrics: 1,
                has_subtitles: 1,
                has_richsync: 1,
                num_favourite: 17,
                album_id: 34581906,
                album_name: '9',
                artist_id: 150228,
                artist_name: 'Jason Aldean',
                track_share_url: 'https://www.musixmatch.com/lyrics/Jason-Aldean/Got-What-I-Got-2?utm_source=application&utm_campaign=api&utm_medium=rhythm%3A1409620732633',
                track_edit_url: 'https://www.musixmatch.com/lyrics/Jason-Aldean/Got-What-I-Got-2/edit?utm_source=application&utm_campaign=api&utm_medium=rhythm%3A1409620732633',
                restricted: 0,
                updated_time: '2020-05-03T20:52:20Z',
                primary_genres: {
                    music_genre_list: [
                        {
                            music_genre: {
                                music_genre_id: 34,
                                music_genre_parent_id: 0,
                                music_genre_name: 'Music',
                                music_genre_name_extended: 'Music',
                                music_genre_vanity: 'Music'
                            }
                        }
                    ]
                }
            } }
    ],
    heading: 'Top 10 Tracks',
    searching: false
}

export const TracksContext = React.createContext();

export function tracksReducer(state, action) {
    return action.payload;
}

export const TracksProvider = ({ children }) => {
    const [tracksState, dispatch] = useReducer(tracksReducer, initialState);

    const actions =  {
        AddTrackAction: (newTrack) => addTrackAction(dispatch, tracksState, newTrack),
        GetTracksAction: () => getTracksAction(dispatch, tracksState),
        DeleteTrackAction: (id) => deleteTrackAction(dispatch, tracksState, id),
        SearchTracksAction: (trackTitle) => searchTracksAction(dispatch, tracksState, trackTitle)
    }

    return (
        <TracksContext.Provider value={{ tracksState, actions }}>
            {children}
        </TracksContext.Provider>
    );
}
