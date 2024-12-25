function skillsMember() {
    var skills = ['HTML', 'CSS', 'JS'];
    var self = this;

    this.addSkill = function(skill) {
        skills.push(skill);
    };

    this.getSkills = function() {
        return skills;
    };

    this.getMember = function() {
        return self;
    };
}