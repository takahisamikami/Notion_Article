const databases = {
  authors: {
    databaseID: "df81368d5ba44958ad7a4da524bc2e2e", // or... "Authors"
    articleRef: "Articles",
  },
  articles: {
    databaseID: "df81368d5ba44958ad7a4da524bc2e2e", // or... "Articles"
    authorRef: "Authors",
  },
}

const status = {
  prefix: "status:",
  colname: "Status",
  states: {
    unread: "⏳ Unread",
    "reading-list": "📚 Reading List",
    done: "🎉 Finished!",
  },
}

const topics = {
  prefix: "topic:",
  colname: "Topics",
  topics: {
    dl: "Deep Learning",
  },
}

const fields = {
  prefix: "field:",
  colname: "Fields",
  fields: {
    mas: "Multi-Agent Systems",
  },
}

const methods = {
  prefix: "method:",
  colname: "Methods",
  methods: {
    mcmc: "Markov-Chain Monte-Carlo",
    vi: "Variational Inference",
  },
}

const folders = {
  prefix: "folders:",
  colname: "Folders",
  folders: {},
}

const icons = {
  book: ":books:",
  "article-journal": ":blue_book:",
  inproceedings: ":bookmark_tabs:",
  "paper-conference": ":bookmark_tabs:",
  proceedings: ":bookmark_tabs:",
}

module.exports = {
  databases, status, topics, fields, methods, folders, icons,
}
