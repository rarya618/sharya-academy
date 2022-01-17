var db = require('../connect');
const schema = require('../schema').chapterSchema;

const Chapter = db.model("Chapter", schema);

function create(chId, classId, subject, chTerm, chName) {
    var success = false;

    const chapter = new Chapter ({
        _id: chId,
        classId: classId,
        subjectId: subject,
        term: chTerm,
        name: chName
    });

    chapter.save()
    .then(success = true)
    .catch(success = false);

    return success;
}

module.exports = create;