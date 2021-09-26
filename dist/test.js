!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.library=e():t.library=e()}(global,(function(){return(()=>{"use strict";var t={493:function(t,e,o){var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,o=1,r=arguments.length;o<r;o++)for(var i in e=arguments[o])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=this&&this.__spreadArrays||function(){for(var t=0,e=0,o=arguments.length;e<o;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<o;e++)for(var n=arguments[e],s=0,a=n.length;s<a;s++,i++)r[i]=n[s];return r};Object.defineProperty(e,"__esModule",{value:!0});var n=o(747),s=o(622),a=o(878),l=o(778),p=function(){function t(t){this.locals={};var e={name:"scaffold",templates:[],output:process.cwd(),createSubfolder:!0,overwrite:!0,quiet:!1};this.config=r(r({},e),t);var o={Name:this.config.name[0].toUpperCase()+this.config.name.slice(1),name:this.config.name[0].toLowerCase()+this.config.name.slice(1)};this.locals=r(r({},o),t.locals)}return t.prototype.parseLocals=function(t){try{return l.compile(t,{noEscape:!0})(this.locals)}catch(e){return this.warn("Problem using Handlebars, returning unmodified content"),t}},t.prototype.fileList=function(t){for(var e=[],o=0,r=t;o<r.length;o++){var i=r[o],n=a.sync(i,{dot:!0}).map((function(t){return"/"==t[0]?t:s.join(process.cwd(),t)})),l=i.indexOf("*"),p=i;l>=0&&(p=i.slice(0,l-1));for(var u=0,c=n;u<c.length;u++){var f=c[u];e.push({base:p,file:f})}}return e},t.prototype.getFileContents=function(t){return this.log(n.readFileSync(t)),n.readFileSync(t).toString()},t.prototype.getOutputPath=function(t,e){var o;if("function"==typeof this.config.output)o=this.config.output(t,e,s.basename(t));else{var r=this.config.output+(this.config.createSubfolder?"/"+this.config.name+"/":"/"),i=t.indexOf(e),n=t;i>=0&&(n=t!==e?t.slice(i+e.length+1):s.basename(t)),o=r+n}return this.parseLocals(o)},t.prototype.writeFile=function(t,e){var o=s.dirname(t);this.writeDirectory(o,t),n.writeFile(t,e,{encoding:"utf-8"},(function(t){if(t)throw t}))},t.prototype.shouldWriteFile=function(t){var e,o,r="boolean"==typeof this.config.overwrite?this.config.overwrite:null===(o=(e=this.config).overwrite)||void 0===o?void 0:o.call(e,t);return!n.existsSync(t)||!1!==r},t.prototype.run=function(){this.log("Generating scaffold: "+this.config.name+"...");var t,e=this.fileList(this.config.templates),o=0;this.log("Template files:",e);for(var r=0,i=e;r<i.length;r++){t=i[r];var s=void 0,a=void 0,l=void 0,p=void 0,u=void 0;try{if(o++,p=t.file,u=t.base,s=this.getOutputPath(p,u),n.lstatSync(p).isDirectory()){this.writeDirectory(s,p);continue}a=this.getFileContents(p),l=this.parseLocals(a),this.shouldWriteFile(s)?(this.info("Writing:",{file:p,base:u,outputPath:s,outputContents:l.replace("\n","\\n")}),this.writeFile(s,l)):this.log("Skipping file "+s)}catch(t){throw this.error("Error while processing file:",{file:p,base:u,contents:a,outputPath:s,outputContents:l}),t}}if(!o)throw new Error("No files to scaffold!");this.log("Done")},t.prototype.writeDirectory=function(t,e){var o=s.dirname(t);n.existsSync(o)||this.writeDirectory(o,t),n.existsSync(t)||(this.info("Creating directory:",{file:e,outputPath:t}),n.mkdirSync(t))},t.prototype._log=function(t){for(var e=[],o=1;o<arguments.length;o++)e[o-1]=arguments[o];if(!this.config.quiet){var r=console[t];r.apply(void 0,e)}},t.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._log.apply(this,i(["log"],t))},t.prototype.info=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._log.apply(this,i(["info"],t))},t.prototype.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._log.apply(this,i(["warn"],t))},t.prototype.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._log.apply(this,i(["error"],t))},t}();e.default=p},743:(t,e,o)=>{Object.defineProperty(e,"__esModule",{value:!0});var r=o(493),i=o(622).join(process.cwd(),"examples");new r.default({templates:[i+"/test-input/Component/**/*"],output:i+"/test-output/no-create-subpath",createSubfolder:!1,locals:{property:"myProp",value:'"value"'}}).run(),new r.default({templates:[i+"/test-input/Component/**/*"],output:i+"/test-output",locals:{property:"myProp",value:'"value"'}}).run(),new r.default({templates:[i+"/test-input/Component/**/*"],output:function(t,e,o){return console.log({file:t,basedir:e,basename:o}),t},locals:{property:"myProp",value:'"value"'}}).run()},747:t=>{t.exports=require("fs")},878:t=>{t.exports=require("glob")},778:t=>{t.exports=require("handlebars")},622:t=>{t.exports=require("path")}},e={};return function o(r){if(e[r])return e[r].exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,o),i.exports}(743)})()}));
//# sourceMappingURL=test.js.map