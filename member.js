function skillsMember() {
    var member = document.getElementById("member");
    var memberSkills = document.getElementById("memberSkills");
    var memberSkillsContainer = document.getElementById("memberSkillsContainer");
    var memberSkillsClose = document.getElementById("memberSkillsClose");
    var memberName = document.getElementById("memberName");
    var memberSkillsTitle = document.getElementById("memberSkillsTitle");
    var memberSkillsList = document.getElementById("memberSkillsList");
    var memberSkillsListItems = document.getElementsByClassName("memberSkillsListItem");
    var memberSkillsListItemsArray = Array.from(memberSkillsListItems);
    var memberSkillsListItemsArrayLength = memberSkillsListItemsArray.length;

    member.addEventListener("click", function() {
        memberSkills.style.display = "block";
        memberSkillsContainer.style.display = "block";
    });

    memberSkillsClose.addEventListener("click", function() {
        memberSkills.style.display = "none";
        memberSkillsContainer.style.display = "none";
    });

    for (var i = 0; i < memberSkillsListItemsArrayLength; i++) {
        memberSkillsListItemsArray[i].addEventListener("click", function() {
            memberSkillsTitle.innerHTML = this.getElementsByTagName("h3")[0].innerHTML;
            memberSkillsList.style.display = "none";
            memberSkillsListItemsArray.map(function(item) {
                item.style.display = "none";
            });
            this.style.display = "block";
            memberSkillsList.style.display = "block";
        });
    }
}