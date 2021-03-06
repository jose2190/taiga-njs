// [setup]
var Issue = function(project, subject, description) {
  this.project = project ? project : undefined;
  this.subject = subject ? subject : "New Issue";
  this.description = description ? description : "";
  this.type =  71954,
  this.severity = 119852,
  this.priority = 71928,
  this.status = 167823
};

var init = function(obj) {

  /* POST Methods */
  obj.prototype.createIssue = function(issue) {
    var path = this._createPath("issues");
    this.post(path, issue);
    return this;
  };

  obj.prototype.listAllIssues = function() {
    var path = this._createPath("issues");
    this.baseRequest.get(path, function(err, res, body) {
      console.log(body);
    })
  };

  obj.prototype.getIssueById = function(id) {
    var path = this._createPath("issues/" + id);
    this.baseRequest.get(path, function(err, res, body) {
      console.log(body);
    })
  };

  obj.prototype.getVotersForIssue = function(id) {
    var path = this._createPath("issues/" + id + "/voters");
    this.baseRequest.get(path, function(err, res, body) {
      console.log(body);
    });
  }

  return obj;
}

module.exports = {
  init: init,
  Issue: Issue
}


// /api/v1/issues/by_ref?ref=<issueRef>&project=<projectId>
// GET
// Get issue

// /api/v1/issues/attachments
// GET
// List issue attachments

// /api/v1/issues/attachments/<issueAttachmentId>
// GET
// Get issue attachments


// /api/v1/issues/<issueId>/upvote
// POST
// Add a vote to an issue
// /api/v1/issues/<issueId>/downvote
// POST
// Remove your vote to an issue
// /api/v1/issues
// POST
// Create issue
// /api/v1/issues/bulk_create
// POST
// Create issues un bulk mode
// /api/v1/issues/attachments
// POST
// Create issue attachments

// /api/v1/issues/attachments/<issueAttachmentId>
// PUT
// Modify issue attachments
// /api/v1/issues/<issueId>
// PUT
// Modify issue

// /api/v1/issues/<issueId>
// PATCH
// Modify partially an issue
// /api/v1/issues/attachments/<issueAttachmentId>
// PATCH
// Modify partially an issue attachments

// /api/v1/issues/attachments/<issueAttachmentId>
// DELETE
// Delete an issue attachments
// /api/v1/issues/<issueId>
// DELETE
// Delete an issue
