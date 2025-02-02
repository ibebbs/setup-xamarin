module.exports =
/******/ (function(modules, runtime) { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	__webpack_require__.ab = __dirname + "/";
/******/
/******/ 	// the startup function
/******/ 	function startup() {
/******/ 		// Load entry module and return exports
/******/ 		return __webpack_require__(299);
/******/ 	};
/******/
/******/ 	// run startup
/******/ 	return startup();
/******/ })
/************************************************************************/
/******/ ({

/***/ 82:
/***/ (function(__unusedmodule, exports) {

"use strict";

// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */
function toCommandValue(input) {
    if (input === null || input === undefined) {
        return '';
    }
    else if (typeof input === 'string' || input instanceof String) {
        return input;
    }
    return JSON.stringify(input);
}
exports.toCommandValue = toCommandValue;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 87:
/***/ (function(module) {

module.exports = require("os");

/***/ }),

/***/ 102:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

// For internal use, subject to change.
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
const fs = __importStar(__webpack_require__(747));
const os = __importStar(__webpack_require__(87));
const utils_1 = __webpack_require__(82);
function issueCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) {
        throw new Error(`Unable to find environment variable for file command ${command}`);
    }
    if (!fs.existsSync(filePath)) {
        throw new Error(`Missing file at path: ${filePath}`);
    }
    fs.appendFileSync(filePath, `${utils_1.toCommandValue(message)}${os.EOL}`, {
        encoding: 'utf8'
    });
}
exports.issueCommand = issueCommand;
//# sourceMappingURL=file-command.js.map

/***/ }),

/***/ 116:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.XamarinMacToolSelector = void 0;
const xamarin_selector_1 = __webpack_require__(792);
class XamarinMacToolSelector extends xamarin_selector_1.XamarinSelector {
    get toolName() {
        return "Xamarin.Mac";
    }
    get basePath() {
        return "/Library/Frameworks/Xamarin.Mac.framework";
    }
}
exports.XamarinMacToolSelector = XamarinMacToolSelector;


/***/ }),

/***/ 129:
/***/ (function(module) {

module.exports = require("child_process");

/***/ }),

/***/ 182:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.XamarinAndroidToolSelector = void 0;
const xamarin_selector_1 = __webpack_require__(792);
class XamarinAndroidToolSelector extends xamarin_selector_1.XamarinSelector {
    get toolName() {
        return "Xamarin.Android";
    }
    get basePath() {
        return "/Library/Frameworks/Xamarin.Android.framework";
    }
}
exports.XamarinAndroidToolSelector = XamarinAndroidToolSelector;


/***/ }),

/***/ 220:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonoToolSelector = void 0;
const fs = __importStar(__webpack_require__(747));
const path = __importStar(__webpack_require__(622));
const core = __importStar(__webpack_require__(470));
const xamarin_selector_1 = __webpack_require__(792);
const version_utils_1 = __webpack_require__(957);
class MonoToolSelector extends xamarin_selector_1.XamarinSelector {
    get basePath() {
        return "/Library/Frameworks/Mono.framework";
    }
    get toolName() {
        return "Mono";
    }
    getAllVersions() {
        const versionsFolders = super.getAllVersions();
        // we have to look into '/Mono.Framework/Versions/<version_folder>/Version' file for Mono to determine full version with 4 digits
        return versionsFolders.map(version => {
            const versionFile = path.join(this.versionsDirectoryPath, version, "Version");
            const realVersion = fs.readFileSync(versionFile).toString();
            return realVersion.trim();
        });
    }
    setVersion(version) {
        // for Mono, version folder contains only 3 digits instead of full version
        version = version_utils_1.VersionUtils.cutVersionLength(version, 3);
        super.setVersion(version);
        const versionDirectory = this.getVersionPath(version);
        core.exportVariable("DYLD_LIBRARY_FALLBACK_PATH", [
            `${versionDirectory}/lib`,
            "/lib",
            "/usr/lib",
            process.env["DYLD_LIBRARY_FALLBACK_PATH"]
        ].join(path.delimiter));
        core.exportVariable("PKG_CONFIG_PATH", [
            `${versionDirectory}/lib/pkgconfig`,
            process.env["PKG_CONFIG_PATH"]
        ].join(path.delimiter));
        core.debug(`Add '${versionDirectory}/bin' to PATH`);
        core.addPath(`${versionDirectory}/bin`);
    }
}
exports.MonoToolSelector = MonoToolSelector;


/***/ }),

/***/ 247:
/***/ (function(module) {

/* global define */
(function (root, factory) {
  /* istanbul ignore next */
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (true) {
    module.exports = factory();
  } else {}
}(this, function () {

  var semver = /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;

  function indexOrEnd(str, q) {
    return str.indexOf(q) === -1 ? str.length : str.indexOf(q);
  }

  function split(v) {
    var c = v.replace(/^v/, '').replace(/\+.*$/, '');
    var patchIndex = indexOrEnd(c, '-');
    var arr = c.substring(0, patchIndex).split('.');
    arr.push(c.substring(patchIndex + 1));
    return arr;
  }

  function tryParse(v) {
    return isNaN(Number(v)) ? v : Number(v);
  }

  function validate(version) {
    if (typeof version !== 'string') {
      throw new TypeError('Invalid argument expected string');
    }
    if (!semver.test(version)) {
      throw new Error('Invalid argument not valid semver (\''+version+'\' received)');
    }
  }

  function compareVersions(v1, v2) {
    [v1, v2].forEach(validate);

    var s1 = split(v1);
    var s2 = split(v2);

    for (var i = 0; i < Math.max(s1.length - 1, s2.length - 1); i++) {
      var n1 = parseInt(s1[i] || 0, 10);
      var n2 = parseInt(s2[i] || 0, 10);

      if (n1 > n2) return 1;
      if (n2 > n1) return -1;
    }

    var sp1 = s1[s1.length - 1];
    var sp2 = s2[s2.length - 1];

    if (sp1 && sp2) {
      var p1 = sp1.split('.').map(tryParse);
      var p2 = sp2.split('.').map(tryParse);

      for (i = 0; i < Math.max(p1.length, p2.length); i++) {
        if (p1[i] === undefined || typeof p2[i] === 'string' && typeof p1[i] === 'number') return -1;
        if (p2[i] === undefined || typeof p1[i] === 'string' && typeof p2[i] === 'number') return 1;

        if (p1[i] > p2[i]) return 1;
        if (p2[i] > p1[i]) return -1;
      }
    } else if (sp1 || sp2) {
      return sp1 ? -1 : 1;
    }

    return 0;
  };

  var allowedOperators = [
    '>',
    '>=',
    '=',
    '<',
    '<='
  ];

  var operatorResMap = {
    '>': [1],
    '>=': [0, 1],
    '=': [0],
    '<=': [-1, 0],
    '<': [-1]
  };

  function validateOperator(op) {
    if (typeof op !== 'string') {
      throw new TypeError('Invalid operator type, expected string but got ' + typeof op);
    }
    if (allowedOperators.indexOf(op) === -1) {
      throw new TypeError('Invalid operator, expected one of ' + allowedOperators.join('|'));
    }
  }

  compareVersions.validate = function(version) {
    return typeof version === 'string' && semver.test(version);
  }

  compareVersions.compare = function (v1, v2, operator) {
    // Validate operator
    validateOperator(operator);

    // since result of compareVersions can only be -1 or 0 or 1
    // a simple map can be used to replace switch
    var res = compareVersions(v1, v2);
    return operatorResMap[operator].indexOf(res) > -1;
  }

  return compareVersions;
}));


/***/ }),

/***/ 299:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(__webpack_require__(470));
const mono_selector_1 = __webpack_require__(220);
const xamarin_ios_selector_1 = __webpack_require__(497);
const xamarin_mac_selector_1 = __webpack_require__(116);
const xamarin_android_selector_1 = __webpack_require__(182);
const os_1 = __webpack_require__(87);
const version_utils_1 = __webpack_require__(957);
const xcode_selector_1 = __webpack_require__(670);
let showVersionMajorMinorWarning = false;
const invokeSelector = (variableName, toolSelector) => {
    const versionSpec = core.getInput(variableName, { required: false });
    if (!versionSpec) {
        return;
    }
    const selector = new toolSelector();
    if (!version_utils_1.VersionUtils.isLatestVersionKeyword(versionSpec) && !version_utils_1.VersionUtils.isValidVersion(versionSpec)) {
        throw new Error(`Value '${versionSpec}' is not valid version for ${selector.toolName}`);
    }
    core.info(`Switching ${selector.toolName} to version '${versionSpec}'...`);
    const targetVersion = selector.findVersion(versionSpec);
    if (!targetVersion) {
        throw new Error([
            `Could not find ${selector.toolName} version that satisfied version spec: ${versionSpec}`,
            "Available versions:",
            ...selector.getAllVersions().map(ver => `- ${ver}`)
        ].join(os_1.EOL));
    }
    core.debug(`${selector.toolName} ${targetVersion} will be set`);
    selector.setVersion(targetVersion);
    core.info(`${selector.toolName} is set to '${targetVersion}'`);
    showVersionMajorMinorWarning = showVersionMajorMinorWarning || version_utils_1.VersionUtils.countVersionLength(versionSpec) > 2;
};
const run = () => {
    try {
        if (process.platform !== "darwin") {
            throw new Error(`This task is intended only for macOS platform. It can't be run on '${process.platform}' platform`);
        }
        invokeSelector("mono-version", mono_selector_1.MonoToolSelector);
        invokeSelector("xamarin-ios-version", xamarin_ios_selector_1.XamarinIosToolSelector);
        invokeSelector("xamarin-mac-version", xamarin_mac_selector_1.XamarinMacToolSelector);
        invokeSelector("xamarin-android-version", xamarin_android_selector_1.XamarinAndroidToolSelector);
        invokeSelector("xcode-version", xcode_selector_1.XcodeSelector);
        if (showVersionMajorMinorWarning) {
            core.warning([
                "It is recommended to specify only major and minor versions of tool (like '13' or '13.2').",
                "Hosted VMs contain the latest patch & build version for each major & minor pair.",
                "It means that version '13.2.1.4' can be replaced by '13.2.2.0' without any notice and your pipeline will start failing."
            ].join(" "));
        }
    }
    catch (error) {
        core.setFailed(error.message);
    }
};
run();


/***/ }),

/***/ 431:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const os = __importStar(__webpack_require__(87));
const utils_1 = __webpack_require__(82);
/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */
function issueCommand(command, properties, message) {
    const cmd = new Command(command, properties, message);
    process.stdout.write(cmd.toString() + os.EOL);
}
exports.issueCommand = issueCommand;
function issue(name, message = '') {
    issueCommand(name, {}, message);
}
exports.issue = issue;
const CMD_STRING = '::';
class Command {
    constructor(command, properties, message) {
        if (!command) {
            command = 'missing.command';
        }
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            let first = true;
            for (const key in this.properties) {
                if (this.properties.hasOwnProperty(key)) {
                    const val = this.properties[key];
                    if (val) {
                        if (first) {
                            first = false;
                        }
                        else {
                            cmdStr += ',';
                        }
                        cmdStr += `${key}=${escapeProperty(val)}`;
                    }
                }
            }
        }
        cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
        return cmdStr;
    }
}
function escapeData(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A');
}
function escapeProperty(s) {
    return utils_1.toCommandValue(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/:/g, '%3A')
        .replace(/,/g, '%2C');
}
//# sourceMappingURL=command.js.map

/***/ }),

/***/ 470:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = __webpack_require__(431);
const file_command_1 = __webpack_require__(102);
const utils_1 = __webpack_require__(82);
const os = __importStar(__webpack_require__(87));
const path = __importStar(__webpack_require__(622));
/**
 * The code to exit an action
 */
var ExitCode;
(function (ExitCode) {
    /**
     * A code indicating that the action was successful
     */
    ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */
    ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode = exports.ExitCode || (exports.ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function exportVariable(name, val) {
    const convertedVal = utils_1.toCommandValue(val);
    process.env[name] = convertedVal;
    const filePath = process.env['GITHUB_ENV'] || '';
    if (filePath) {
        const delimiter = '_GitHubActionsFileCommandDelimeter_';
        const commandValue = `${name}<<${delimiter}${os.EOL}${convertedVal}${os.EOL}${delimiter}`;
        file_command_1.issueCommand('ENV', commandValue);
    }
    else {
        command_1.issueCommand('set-env', { name }, convertedVal);
    }
}
exports.exportVariable = exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */
function setSecret(secret) {
    command_1.issueCommand('add-mask', {}, secret);
}
exports.setSecret = setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */
function addPath(inputPath) {
    const filePath = process.env['GITHUB_PATH'] || '';
    if (filePath) {
        file_command_1.issueCommand('PATH', inputPath);
    }
    else {
        command_1.issueCommand('add-path', {}, inputPath);
    }
    process.env['PATH'] = `${inputPath}${path.delimiter}${process.env['PATH']}`;
}
exports.addPath = addPath;
/**
 * Gets the value of an input.  The value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
function getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
    }
    return val.trim();
}
exports.getInput = getInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setOutput(name, value) {
    command_1.issueCommand('set-output', { name }, value);
}
exports.setOutput = setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */
function setCommandEcho(enabled) {
    command_1.issue('echo', enabled ? 'on' : 'off');
}
exports.setCommandEcho = setCommandEcho;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */
function setFailed(message) {
    process.exitCode = ExitCode.Failure;
    error(message);
}
exports.setFailed = setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */
function isDebug() {
    return process.env['RUNNER_DEBUG'] === '1';
}
exports.isDebug = isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */
function debug(message) {
    command_1.issueCommand('debug', {}, message);
}
exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 */
function error(message) {
    command_1.issue('error', message instanceof Error ? message.toString() : message);
}
exports.error = error;
/**
 * Adds an warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 */
function warning(message) {
    command_1.issue('warning', message instanceof Error ? message.toString() : message);
}
exports.warning = warning;
/**
 * Writes info to log with console.log.
 * @param message info message
 */
function info(message) {
    process.stdout.write(message + os.EOL);
}
exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */
function startGroup(name) {
    command_1.issue('group', name);
}
exports.startGroup = startGroup;
/**
 * End an output group.
 */
function endGroup() {
    command_1.issue('endgroup');
}
exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */
function group(name, fn) {
    return __awaiter(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
            result = yield fn();
        }
        finally {
            endGroup();
        }
        return result;
    });
}
exports.group = group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function saveState(name, value) {
    command_1.issueCommand('save-state', { name }, value);
}
exports.saveState = saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */
function getState(name) {
    return process.env[`STATE_${name}`] || '';
}
exports.getState = getState;
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 497:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.XamarinIosToolSelector = void 0;
const xamarin_selector_1 = __webpack_require__(792);
class XamarinIosToolSelector extends xamarin_selector_1.XamarinSelector {
    get toolName() {
        return "Xamarin.iOS";
    }
    get basePath() {
        return "/Library/Frameworks/Xamarin.iOS.framework";
    }
}
exports.XamarinIosToolSelector = XamarinIosToolSelector;


/***/ }),

/***/ 611:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.invokeCommandSync = void 0;
const child = __importStar(__webpack_require__(129));
const os_1 = __webpack_require__(87);
exports.invokeCommandSync = (command, args, options) => {
    let execResult;
    execResult = child.spawnSync("sudo", [command, ...args]);
    if (execResult.status !== 0) {
        const fullCommand = `sudo ${command} ${args.join(" ")}`;
        throw new Error([
            `Error during run '${fullCommand}'`,
            execResult.stderr,
            execResult.stdout
        ].join(os_1.EOL));
    }
};


/***/ }),

/***/ 622:
/***/ (function(module) {

module.exports = require("path");

/***/ }),

/***/ 670:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.XcodeSelector = void 0;
const fs = __importStar(__webpack_require__(747));
const path = __importStar(__webpack_require__(622));
const core = __importStar(__webpack_require__(470));
const version_utils_1 = __webpack_require__(957);
const utils = __importStar(__webpack_require__(611));
class XcodeSelector {
    constructor() {
        this.xcodeDirectoryPath = "/Applications";
        this.xcodeFilenameRegex = /Xcode_([\d.]+)(_beta)?\.app/;
    }
    parseXcodeVersionFromFilename(filename) {
        const match = filename.match(this.xcodeFilenameRegex);
        if (!match || match.length < 2) {
            return null;
        }
        return match[1];
    }
    get toolName() {
        return "Xcode";
    }
    getVersionPath(version) {
        return path.join(this.xcodeDirectoryPath, `Xcode_${version}.app`);
    }
    getAllVersions() {
        const children = fs.readdirSync(this.xcodeDirectoryPath, { encoding: "utf8", withFileTypes: true });
        let potentialVersions = children.filter(child => !child.isSymbolicLink() && child.isDirectory()).map(child => child.name);
        potentialVersions = potentialVersions.map(child => this.parseXcodeVersionFromFilename(child)).filter((child) => !!child);
        const stableVersions = potentialVersions.filter(ver => version_utils_1.VersionUtils.isValidVersion(ver));
        const betaVersions = potentialVersions.filter(ver => ver.endsWith("_beta")).map(ver => {
            var _a;
            const verWithoutBeta = ver.substr(0, ver.length - 5);
            return (_a = children.find(child => child.isSymbolicLink() && this.parseXcodeVersionFromFilename(child.name) === verWithoutBeta)) === null || _a === void 0 ? void 0 : _a.name;
        }).filter(((ver) => !!ver && version_utils_1.VersionUtils.isValidVersion(ver)));
        // sort versions array by descending to make sure that the newest version will be picked up
        return version_utils_1.VersionUtils.sortVersions([...stableVersions, ...betaVersions]);
    }
    findVersion(versionSpec) {
        var _a;
        const availableVersions = this.getAllVersions();
        if (availableVersions.length === 0) {
            return null;
        }
        if (version_utils_1.VersionUtils.isLatestVersionKeyword(versionSpec)) {
            return availableVersions[0];
        }
        return (_a = availableVersions.find(ver => version_utils_1.VersionUtils.isVersionsEqual(ver, versionSpec))) !== null && _a !== void 0 ? _a : null;
    }
    setVersion(version) {
        const targetVersionDirectory = this.getVersionPath(version);
        if (!fs.existsSync(targetVersionDirectory)) {
            throw new Error(`Invalid version: Directory '${targetVersionDirectory}' doesn't exist`);
        }
        core.debug(`sudo xcode-select -s ${targetVersionDirectory}`);
        utils.invokeCommandSync("xcode-select", ["-s", targetVersionDirectory], { sudo: true });
        core.exportVariable("MD_APPLE_SDK_ROOT", targetVersionDirectory);
    }
}
exports.XcodeSelector = XcodeSelector;


/***/ }),

/***/ 747:
/***/ (function(module) {

module.exports = require("fs");

/***/ }),

/***/ 792:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.XamarinSelector = void 0;
const fs = __importStar(__webpack_require__(747));
const path = __importStar(__webpack_require__(622));
const core = __importStar(__webpack_require__(470));
const utils = __importStar(__webpack_require__(611));
const version_utils_1 = __webpack_require__(957);
class XamarinSelector {
    get versionsDirectoryPath() {
        return path.join(this.basePath, "Versions");
    }
    getVersionPath(version) {
        return path.join(this.versionsDirectoryPath, version);
    }
    getAllVersions() {
        const children = fs.readdirSync(this.versionsDirectoryPath, { encoding: "utf8", withFileTypes: true });
        // macOS image contains symlinks for full versions, like '13.2' -> '13.2.3.0'
        // filter such symlinks and look for only real versions
        let potentialVersions = children.filter(child => !child.isSymbolicLink() && child.isDirectory()).map(child => child.name);
        potentialVersions = potentialVersions.filter(child => version_utils_1.VersionUtils.isValidVersion(child));
        // sort versions array by descending to make sure that the newest version will be picked up
        return version_utils_1.VersionUtils.sortVersions(potentialVersions);
    }
    findVersion(versionSpec) {
        var _a;
        const availableVersions = this.getAllVersions();
        if (availableVersions.length === 0) {
            return null;
        }
        if (version_utils_1.VersionUtils.isLatestVersionKeyword(versionSpec)) {
            return availableVersions[0];
        }
        const normalizedVersionSpec = version_utils_1.VersionUtils.normalizeVersion(versionSpec);
        core.debug(`Semantic version spec of '${versionSpec}' is '${normalizedVersionSpec}'`);
        return (_a = availableVersions.find(ver => version_utils_1.VersionUtils.isVersionsEqual(ver, normalizedVersionSpec))) !== null && _a !== void 0 ? _a : null;
    }
    setVersion(version) {
        const targetVersionDirectory = this.getVersionPath(version);
        if (!fs.existsSync(targetVersionDirectory)) {
            throw new Error(`Invalid version: Directory '${targetVersionDirectory}' doesn't exist`);
        }
        const currentVersionDirectory = path.join(this.versionsDirectoryPath, "Current");
        core.debug(`Creating symlink '${currentVersionDirectory}' -> '${targetVersionDirectory}'`);
        if (fs.existsSync(currentVersionDirectory)) {
            utils.invokeCommandSync("rm", ["-f", currentVersionDirectory], { sudo: true });
        }
        utils.invokeCommandSync("ln", ["-s", targetVersionDirectory, currentVersionDirectory], { sudo: true });
    }
    static toString() {
        // show correct name for test suite
        return this.name;
    }
}
exports.XamarinSelector = XamarinSelector;


/***/ }),

/***/ 957:
/***/ (function(__unusedmodule, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionUtils = void 0;
const compare_versions_1 = __importDefault(__webpack_require__(247));
class VersionUtils {
}
exports.VersionUtils = VersionUtils;
VersionUtils.isValidVersion = (version) => {
    return compare_versions_1.default.validate(version);
};
VersionUtils.isLatestVersionKeyword = (version) => {
    return version === "latest";
};
VersionUtils.isVersionsEqual = (firstVersion, secondVersion) => {
    return compare_versions_1.default.compare(firstVersion, secondVersion, "=");
};
VersionUtils.sortVersions = (versions) => {
    return [...versions].sort(compare_versions_1.default).reverse();
};
VersionUtils.normalizeVersion = (version) => {
    const versionParts = VersionUtils.splitVersionToParts(version);
    while (versionParts.length < 4) {
        versionParts.push("x");
    }
    return VersionUtils.buildVersionFromParts(versionParts);
};
VersionUtils.countVersionLength = (version) => {
    return VersionUtils.splitVersionToParts(version).length;
};
VersionUtils.cutVersionLength = (version, newLength) => {
    const versionParts = VersionUtils.splitVersionToParts(version);
    const newParts = versionParts.slice(0, newLength);
    return VersionUtils.buildVersionFromParts(newParts);
};
VersionUtils.splitVersionToParts = (version) => {
    return version.split(".");
};
VersionUtils.buildVersionFromParts = (versionParts) => {
    return versionParts.join(".");
};


/***/ })

/******/ });
