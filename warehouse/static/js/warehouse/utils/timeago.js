const times = {
  day: 24 * 60 * 60 * 1000,
  week: 7 * 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000,
};

class TimeStamp {
  constructor(time) {
    this.now = new Date();
    this.timestamp = new Date(time);
    this.diff = this.now - this.timestamp;
    this.cutoff = times.week; // one week
    this.isBeforeCutoff = this.diff <= this.cuteoff;
    this.timeago = {};
    if (this.isBeforeCutoff) {
      var diff = this.diff;
      this.timeago.days = Math.floor(diff / times.day);
      diff -= this.timeago.days * times.day;
      this.timeago.hours = Math.floor(diff / times.hours);
      diff -= this.timeago.hours * times.hour;
      this.timeago.minutes = Math.floor(diff / times.minutes);
    }
  }

  getReadableTimestamp() {
    var { days, minutes, hours } = this.timeago;
    if (days > 1) {
      return `About ${days} days ago.`;
    }

    if (days == 1) {
      return "Yesterday.";
    }

    if (hours > 0) {
      var numHours = hours != 1 ? `${hours} hours` : "an hour";
      return `About ${numHours} ago.`;
    } else if (minutes > 0) {
      var numMinutes = minutes > 1 ? `${minutes} minutes` : "a minute";
      return `About ${numMinutes} ago.`;
    } else {
      return "Just Now.";
    }
  }
}

export default () => {
  var timeElement = document.querySelector("time");

  if (!timeElement) return;
  var datetime = timeElement.getAttribute("datetime");
  var timestamp = new TimeStamp(datetime);

  window.timestmap = timestamp;

  if (timestamp.isBeforeCutoff) {
    timeElement.innerText = timestamp.getReadableTimestamp();
  }
};