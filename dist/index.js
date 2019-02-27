!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.library=t():e.library=t()}(global,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=require("path")},function(e,t,n){"use strict";var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),i=n(0),s=n(3),f=n(4),c=function(){function e(e){this.locals={};var t={name:"scaffold",templates:[],output:process.cwd(),createSubfolder:!0};this.config=o({},t,e);var n={Name:this.config.name[0].toUpperCase()+this.config.name.slice(1),name:this.config.name[0].toLowerCase()+this.config.name.slice(1)};this.locals=o({},n,e.locals)}return e.prototype.parseLocals=function(e){return f.compile(e,{noEscape:!0})(this.locals)},e.prototype.fileList=function(e){for(var t=[],n=0,o=e;n<o.length;n++){var r=o[n],f=s.sync(r,{dot:!0}).map(function(e){return"/"==e[0]?e:i.join(process.cwd(),e)}),c=r.indexOf("*"),u=r;c>=0&&(u=r.slice(0,c-1));for(var a=0,l=f;a<l.length;a++){var p=l[a];t.push({base:u,file:p})}}return t},e.prototype.getFileContents=function(e){return console.log(r.readFileSync(e)),r.readFileSync(e).toString()},e.prototype.getOutputPath=function(e,t){var n;if("function"==typeof this.config.output)n=this.config.output(e,t);else{var o=this.config.output+(this.config.createSubfolder?"/"+this.config.name+"/":"/"),r=e.indexOf(t),i=e;r>=0&&(i=e.slice(r+t.length+1)),n=o+i}return this.parseLocals(n)},e.prototype.writeFile=function(e,t){r.existsSync(i.dirname(e))||r.mkdirSync(i.dirname(e)),console.info("Writing file:",e),r.writeFile(e,t,{encoding:"utf-8"},function(e){if(e)throw e})},e.prototype.run=function(){console.log("Generating scaffold: "+this.config.name+"...");for(var e,t=0,n=0,o=this.fileList(this.config.templates);n<o.length;n++){t++;var r=(e=o[n]).file,i=e.base,s=this.getOutputPath(r,i),f=this.getFileContents(r),c=this.parseLocals(f);this.writeFile(s,c),console.info("Parsing:",{file:r,base:i,outputPath:s,outputContents:c.replace("\n","\\n")})}if(!t)throw new Error("No files to scaffold!");console.log("Done")},e}();t.default=c},function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("glob")},function(e,t){e.exports=require("handlebars")}])});
//# sourceMappingURL=index.js.map