// types of modules in NODE.js

// Native or core module
import fs from "node:fs";
import net from "node:net";
import dgram from "node:dgram";
import http from "node:http";
import child_process from "node:child_process";
import zlib from "node:zlib";
import crypto from "node:crypto";
import os from "os";
import worker_threads from "node:worker_threads";
import cluster from "node:cluster";

// NPM Modules... third party modules
/**
 * These modules comes from npm.
 * comes when we install it
 * npm install express axios
 * it is found in nodule_modules package
 */
// import axios from "axios";
// import express from "express";
//userModule
import product, { sum } from "./math.js";

console.log(os.platform());
console.log(sum(1, 2, 3, 4));
console.log(product(1, 2, 3));
