module.exports = {

  name: "unnecessary-elements",

  config: {
    isUnnecessary: function(element) {
      var name = element.nodeName.toLowerCase()
        , isUnsemantic = name == "div" || name == "span"
        , isAttributed = element.attributes.length === 0
      return isUnsemantic && isAttributed
    }
  },

  func: function(listener, reporter, config) {
    listener.on('element', function(name) {
      if (config.isUnnecessary(this)) {
        reporter.warn(
          "unnecessary-elements",
          "Do not use <div> or <span> elements without any attributes.",
          this
        )
      }
    })
  }
}
