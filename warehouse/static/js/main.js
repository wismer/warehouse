// Note: This file only exists temporarily. Once the rest of this code gets
//       ported to using the ES6 syntax and is part of the warehouse package
//       this will be removed. New code should go in
//       warehouse/static/js/warehouse and not here.

import $ from "jquery";
import "timeago";


$(document).ready(function() {
  $.timeago.settings.cutoff = 7 * 24 * 60 * 60 * 1000;  // One week

  document.l10n.ready.then(function() {
    // Format all of the time.relative tags to display relative time.
    $(".-js-relative-time").timeago();
  });
  $(".-js-relative-time").timeago();  // Add back to document.l10n.ready
});
