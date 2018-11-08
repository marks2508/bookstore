const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const User      = require('../model/user');

User.collection.drop();


const bookData = [
  {
    title: 'Dracula',
    author: 'Brah Stoker',
    year: 1897,
    genre: 'Gothic horror',
    isbn: '014143984X',
    description: 'Bram Stoker\'s peerless tale of desperate battle against a powerful, ancient vampire, the Penguin Classics edition of Dracula is edited with notes and an introduction by Maurice Hindle, as well as a preface by Christopher Frayling. When Jonathan Harker visits Transylvania to help Count Dracula purchase a London house, he makes horrifying discoveries in his client\'s castle. Soon afterwards, disturbing incidents unfold in England: a ship runs aground on the shores of Whitby, its crew vanished; beautiful Lucy Westenra slowly succumbs to a mysterious, wasting illness, her blood drained away; and the lunatic Renfield raves about the imminent arrival of his \'master\'.  In the ensuing battle of wills between the sinister Count and a determined group of adversaries - led by the intrepid vampire hunter Abraham van Helsing - Bram Stoker created a masterpiece of the horror genre, probing into questions of identity, sanity and the dark corners of Victorian sexuality and desire.'
  },{
    title: 'Heart of Darkness',
    author: 'Joseph Conrad',
    year: 1899,
    genre: 'Physchological fiction',
    isbn: '0141441674',
    description: 'A haunting and hugely influential Modernist masterpiece, the Penguin Classics edition of Joseph Conrad\'s Heart of Darkness is edited with an introduction by Owen Knowles. Conrad\'s narrator Marlow, a seaman and wanderer, recounts his physical and psychological journey in search of the infamous ivory trader Kurtz: dying, insane, and guilty of unspeakable atrocities. Travelling upriver to the heart of the African continent, he gradually becomes obsessed by this enigmatic, wraith-like figure. Marlow\'s discovery of how Kurtz has gained his position of power over the local people involves him in a radical questioning, not only of his own nature and values, but also those of western civilisation. The inspiration for Francis Ford Coppola\'s Oscar-winning film Apocalypse Now, Heart of Darkness is a quintessentially modernist work exploring the limits of human experience and the nightmarish realities of imperialism. Part of a major series of new editions of Conrad\'s most famous works in Penguin Classics, this volume contains Conrad\'s Congo Diary, a chronology, further reading, notes, a map of the Congo, a glossary and an introduction discussing the author\'s experiences in Africa, the narrative and symbolic complexities of Heart of Darkness and critical responses to the novel. Joseph Conrad (1857-1924) was born in the Ukraine and grew up under Tsarist autocracy. After spending years in the French, and later the British Merchant Navy, Conrad left the sea to devote himself to writing. In 1896 he settled in Kent, where he produced within fifteen years such modern classics as Youth, Heart of Darkness, Lord Jim, Typhoon, Nostromo, The Secret Agent and Under Western Eyes. If you enjoyed Heart of Darkness, you might like E.M. Forster\'s A Passage to India, also available in Penguin Classics. \'Seems to reach into the heart of Conrad himself\' Peter Ackroyd'
  },{
    title: 'The Outsider',
    author: 'Albert Camus',
    year: 1942,
    genre: 'Philosophical fiction',
    isbn: '0141182504',
    description: '\'My mother died today. Or maybe yesterday, I don\'t know.\' In The Outsider (1942), his classic existentialist novel, Camus explores the alienation of an individual who refuses to conform to social norms. Meursault, his anti-hero, will not lie. When his mother dies, he refuses to show his emotions simply to satisfy the expectations of others. And when he commits a random act of violence on a sun-drenched beach near Algiers, his lack of remorse compounds his guilt in the eyes of society and the law. Yet he is as much a victim as a criminal. Albert Camus\' portrayal of a man confronting the absurd, and revolting against the injustice of society, depicts the paradox of man\'s joy in life when faced with the \'tender indifference\' of the world. Sandra Smith\'s translation, based on close listening to a recording of Camus reading his work aloud on French radio in 1954, sensitively renders the subtleties and dream-like atmosphere of L\'Etranger. Albert Camus (1913-1960), French novelist, essayist and playwright, is one of the most influential thinkers of the 20th century. His most famous works include The Myth of Sisyphus (1942), The Plague (1947), The Just (1949), The Rebel (1951) and The Fall (1956). He was awarded the Nobel Prize for Literature in 1957, and his last novel, The First Man, unfinished at the time of his death, appeared in print for the first time in 1994, and was published in English soon after by Hamish Hamilton. Sandra Smith was born and raised in New York City and is a Fellow of Robinson College, University of Cambridge, where she teaches French Literature and Language. She has won the French American Foundation Florence Gould Foundation Translation Prize, as well as the PEN Book-of-the-Month Club Translation Prize.'
  },{
    title: 'One day in the life of Ivan Denisovich',
    author: 'Aleksandr Solzhenitsyn',
    year: 1963,
    genre: 'Historical fiction',
    isbn: '0140020535',
    description: 'Bringing into harsh focus the daily struggle for existence in a Soviet gulag, Aleksandr Solzhenitsyn\'s One Day in the Life of Ivan Denisovich is translated by Ralph Parker in Penguin Modern Classics. This brutal, shattering glimpse of the fate of millions of Russians under Stalin shook Russia and shocked the world when it first appeared. Discover the importance of a piece of bread or an extra bowl of soup, the incredible luxury of a book, the ingenious possibilities of a nail, a piece of string or a single match in a world where survival is all. Here safety, warmth and food are the first objectives. Reading it, you enter a world of incarceration, brutality, hard manual labour and freezing cold - and participate in the struggle of men to survive both the terrible rigours of nature and the inhumanity of the system that defines their conditions of life. Though twice-decorated for his service at the front during the Second World War, Aleksandr Isayevich Solzhenitsyn (1918-2008) was arrested in 1945 for making derogatory remarks about Stalin, and sent to a series of brutal Soviet labour camps in the Arctic Circle, where he remained for eight years. Released after Stalin\'s death, he worked as a teacher, publishing his novel One Day in the Life of Ivan Denisovich with the approval of Nikita Khrushchev in 1962, to huge success. His 1967 novel Cancer Ward, as well as his magnum opus The Gulag Archipelago, were not as well-received by Soviet authorities, and not long after being awarded the Nobel Prize for literature in 1970, Solzhenitsyn was deported from the USSR. In 1994, after twenty years in exile, Solzhenitsyn made his long-awaited return to Russia. If you enjoyed One Day in the Life of Ivan Denisovich, you might also like Yevgeny Zamyatin\'s We, available in Penguin Classics. \'It is a blow struck for human freedom all over the world ... and it is gloriously readable'
  },{
    title: 'On the road',
    author: 'Jack Kerouac',
    year: 1957,
    genre: 'Travel',
    isbn: '9780141182674',
    description: 'Five decades after it was first published, Jack Kerouac\'s seminal Beat novel On the Road finally finds its way to the big screen, in a production from award-winning director Walter Salles (Motorcycle Diaries) starring Sam Riley (Control, Brighton Rock), Garret Hedlund (Friday Night Lights), Kristen Stewart (Twilight), Kirsten Dunst, Amy Adams and Viggo Mortensen. Sal Paradise (Sam Riley), a young innocent, joins his hero Dean Moriarty (Garrett Hedlund), a traveller and mystic, the living epitome of Beat, on a breathless, exuberant ride back and forth across the United States. Their hedonistic search for release or fulfilment through drink, sex, drugs and jazz becomes an exploration of personal freedom, a test of the limits of the American dream. A brilliant blend of fiction and autobiography, Jack Kerouac\'s exhilarating novel swings to the rhythms of 1950s underground America, racing towards the sunset with unforgettable exuberance, poignancy and autobiographical passion. One of the most influential and important novels of the 20th century, On the Road is the book that launched the Beat Generation and remains the bible of that literary movement. \'The most beautifully executed, the clearest and the most important utterance yet made by the generation Kerouac himself named years ago as "beat"\' The New York Times \'Pop writing at its best. It changed the way I saw the world, making me yearn for fresh experience\' Hanif Kureishi, Independent on Sunday \'On the Road sold a trillion Levis and a million espresso machines, and also sent countless kids on the road\' William Burroughs'
  },{
    title: 'The divine comedy',
    author: 'Dante Alighieri',
    year: 1480,
    genre: 'Poetry',
    isbn: '9781857151831',
    description: '"Finally I realised that I had been practising for this job every time I wrote a quatrain ...I had spent all this time - the greater part of a lifetime - preparing my instruments" The Divine Comedy is the precursor of modern literature, and Clive James\'s new translation - his life\'s work and decades in the making - presents Dante\'s entire epic poem in a single song. While many poets and translators have attempted to capture the full glory of The Divine Comedy in English, many have fallen short. Victorian verse translations established an unfortunate tradition of reproducing the sprightly rhyming measures of Dante but at the same time betraying the strain on the translator\'s powers of invention. For Dante, the dramatic human stories of Hell were exciting, but the spiritual studies of Purgatory and the sublime panoramas of Heaven were no less so. In this incantatory new translation, James - defying the convention by writing in quatrains - tackles these problems head-on and creates a striking and hugely accessible translation that gives us The Divine Comedy as a whole, unified, and dramatic work.'
  },{
    title: 'The haunting of hill house',
    author: 'Shirley Jackson',
    year: 1889,
    genre: 'Horror',
    isbn: ' 0140071083',
    description: 'The best-known of Shirley Jackson\'s novels, and the inspiration for writers such as Neil Gaiman and Stephen King, The Haunting of Hill House is a chilling story of the power of fear. Four seekers have arrived at the rambling old pile known as Hill House: Dr. Montague, an occult scholar looking for solid evidence of psychic phenomena; Theodora, his lovely assistant; Luke, the future inheritor of the estate; and Eleanor, a friendless, fragile young woman with a dark past. As they begin to cope with horrifying occurrences beyond their control or understanding, they cannot possibly know what lies ahead. For Hill House is gathering its powers - and soon it will choose one of them to make its own. Now a major Netflix series,The Haunting of Hill House is a powerful work of slow-burning psychological horror.'
  },{
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    genre: 'Political satire',
    isbn: '9780141187761',
    description: 'Who controls the past controls the future: who controls the present controls the past.As much a cultural and historical marker as an absorbing thriller, George Orwell’s 1984 changed and continues to change the way we think about the past and imagine the future. Perhaps the most pervasively influential novel of the twentieth century, 1984 resonates so completely have to become part of our commonplace lexicon, with words like doublethink and Big Brother (it was also Orwell who first coined the term ‘Cold War’) becoming part of the fabric of everyday life and speech. As the critic and author Jonathan Freedland wrote about 1984, ‘it has become a shorthand for totalitarianism, for the surveillance state, for the power of the mass media to manipulate public opinion, history and even the truth.’ Yet before all of this, 1984 is also a brilliant, compelling, knife-edged thriller, dark with menace and nail-biting tension. 1984 is the story of one man, who could be everyman, Winston Smith. Hidden away in the Record Department of the sprawling Ministry of Truth, Winston skilfully rewrites the past to suit the needs of the Party. Yet he inwardly rebels against the totalitarian world he lives in, which demands absolute obedience and controls him through the all-seeing telescreens and the watchful eye of Big Brother, symbolic head of the Party. In his longing for truth and liberty, Smith begins a secret love affair with a fellow-worker Julia, but soon discovers the true price of freedom is betrayal. 1984 is a book that remains as fresh and sharply resonant now as when Orwell first published it in 1949. More than half a century on, it continues to be one of the foundation stones in any Waterstones bookshop; a book that deserves and demands to be read. ‘It\'s not only journalists who should be in awe of George Orwell. Anyone embarking on a political thriller should look to 1984 – to see how it\'s done.’ – The Independent. You can find many of the sites that inspired the works of George Orwell on a modern map, including the original inspiration for Animal Farm nestling up a quiet East Sussex road. These days known primarily for his disturbing and influential dystopian works, most notably 1984, Orwell was best regarded for most of his career as a journalist and critic and his fiction and many essays, are equally rooted in a very real-world view. Well-travelled and socially and politically engaged, Orwell drew from a life of wide experience in his writing; from times of abject poverty living as a tramp on the streets of London, to exploring social deprivation in northern England, to mingling with political elite and fighting in the Spanish Civil War. His best known works of non-fiction include: Down and Out in Paris and London, Keep the Aspidistra Flying, The Road to Wigan Pier and Homage to Catalonia.'
  },{
    title: 'The catcher in the rye',
    author: 'J.D Salinger',
    year: '1945',
    genre: 'Existenital philosophy',
    isbn: '0241950430',
    description: 'Witty, wise and bittersweet, The Catcher in the Rye is the ultimate American coming-of-age novel - a timeless classic. It\'s Christmas and Holden Caulfield has just been expelled from yet another school. Fleeing the crooks at Pencey Prep, he pinballs around New York City seeking solace in fleeting encounters - shooting the bull with strangers in dive hotels, wandering alone round Central Park, getting beaten up by pimps and cut down by erstwhile girlfriends. The city is beautiful and terrible, in all its neon loneliness and seedy glamour, its mingled sense of possibility and emptiness. Holden passes through it like a ghost, thinking always of his kid sister Phoebe, the only person who really understands him, and his determination to escape the phonies and find a life of true meaning. The Catcher in the Rye is an all-time classic coming-of-age story: an elegy to teenage alienation, capturing the deeply human need for connection and the bewildering sense of loss as we leave childhood behind. \'He wrote a perfect novel and it changed US culture forever\' Independent.'
  }];

const userData = [{
  name: 'mark',
  email: 'm@m',
  password: 'm',
  passwordConfirmation: 'm',
  books: [bookData[1], bookData[2], bookData[3], bookData[4]]
}, {
  name: 'tom',
  email: 't@t',
  password: 't',
  passwordConfirmation: 't',
  books: [bookData[5]]
}, {
  name: 'john',
  email: 'j@j',
  password: 'j',
  passwordConfirmation: 'j',
  books: [bookData[6], bookData[7], bookData[8]]
}];

mongoose.connect(dbURI)
  .then(() => User.create(userData))
  .then(users => console.log(`${users.length} users created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
