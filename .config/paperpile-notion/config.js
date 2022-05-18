const databases = {
  authors: {
    databaseID: "a95eb02423ce41b287c9a7b0d1ff8d27", // or... "Authors"
    articleRef: "Articles",
  },
  articles: {
    databaseID: "92d731a1ce844bc283c8007646b59668", // or... "Articles"
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
