this["JST"] = this["JST"] || {};

this["JST"]["public/app/templates/form.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div id=\"main\">\n\n    <div class=\"left formTitle\">\n        Title\n    </div>\n    <div class=\"left formContent\">\n        <input type=\"text\">\n    </div>\n    <div class=\"clear\"></div>\n    <div class=\"left formTitle\">\n        Description\n    </div>\n    <div class=\"left formContent\">\n        <textarea rows=\"10\" cols=\"70\"></textarea>\n    </div>\n    <div style=\"clear:all\"></div>\n    \n    "
    + this.escapeExpression(((helper = (helper = helpers.modus || (depth0 != null ? depth0.modus : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"modus","hash":{},"data":data}) : helper)))
    + "\n\n</div>";
},"useData":true});

this["JST"]["public/app/templates/head.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "Luca und ricardos projekt head\n";
},"useData":true});

this["JST"]["public/app/templates/index.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"main\">\n    <div class=\"buttons\">\n        <div class=\"left half\"><button id=\"newnote\">Create new Note</button></div>\n        <div class=\"left half\"><select><option>Black White-Style</option></select></div>\n    </div>\n    <div class=\"clear\"></div>\n    <div class=\"order\">\n        <div class=\"left\"><button id=\"order_finish\">By finished Date</button></div>\n        <div class=\"left\"><button id=\"order_created\">By created Date</button></div>\n        <div class=\"left\"><button id=\"order_importance\">By Importance</button></div>\n    </div>\n    <div class=\"clear\"></div>\n    <div class=\"items\">\n        <div class=\"title\">\n            <div class=\"left\">Nächsten Mittwoch</div>\n            <div class=\"left\">CAS FEE Selbstudium / Projekt Aufgabe erledigen</div>\n        </div>\n    </div>\n    <div class=\"clear\"></div>\n    <div class=\"item\">\n\n    </div>\n</div>\n\n\n<a href=\"#create_note\">MAKE NEW ON</a>\n\n<a href=\"#edit_note\">EDIT NEW ON</a>\n";
},"useData":true});

this["JST"]["public/app/templates/list.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div id=\"main\">\n    <ul class=\"buttons\">\n        <li class=\"left half\"><button id=\"newnote\">Create new Note</button></li>\n        <li class=\"left half\">\n            <div class=\"styled-select\">\n                <select>\n                    <option>Black White-Style</option>\n                    <option>Black White-Style</option>\n                </select>\n            </div>\n        </li>\n    </ul>\n    <div class=\"clear\"></div>\n    <ul class=\"order\">\n        <li class=\"left\"><button id=\"order_finish\">By finished Date</button></li>\n        <li class=\"left\"><button id=\"order_created\">By created Date</button></li>\n        <li class=\"left\"><button id=\"order_importance\">By Importance</button></li>\n    </ul>\n    <div class=\"clear\"></div>\n    <div class=\"items\">\n        <div class=\"title\">\n            <div class=\"left\">Nächsten Mittwoch</div>\n            <div class=\"left\">CAS FEE Selbstudium / Projekt Aufgabe erledigen</div>\n        </div>\n    </div>\n    <div class=\"clear\"></div>\n    <div class=\"item\">\n\n    </div>\n</div>";
},"useData":true});