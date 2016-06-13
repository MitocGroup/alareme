

class ProiecteDirective {
  constructor($location, $anchorScroll) {
    this.deepAsset = deepAsset;
    this.$location = $location;
    this.$anchorScroll = $anchorScroll;
  }

  hideAllBoxes() {
    $(".hidden").slideUp('slow');
  };

  showSecurity() {
    this.hideAllBoxes();
    $(".vis1").slideToggle("slow");
  }

  showSala() {
    this.hideAllBoxes();
    $(".vis2").slideToggle("slow");
  }

  showSalaSport() {
    this.hideAllBoxes();
    $(".vis3").slideToggle("slow");
  }
}
