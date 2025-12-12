(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/actions/data:a4e3c4 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7f3f98d95b50b341927ca35abb13c7a164f73cfac9":"getStockProfile"},"lib/actions/finnhub.actions.ts",""] */ __turbopack_context__.s([
    "getStockProfile",
    ()=>getStockProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getStockProfile = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7f3f98d95b50b341927ca35abb13c7a164f73cfac9", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getStockProfile"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmlubmh1Yi5hY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgeyBnZXREYXRlUmFuZ2UsIHZhbGlkYXRlQXJ0aWNsZSwgZm9ybWF0QXJ0aWNsZSB9IGZyb20gJ0AvbGliL3V0aWxzJztcbmltcG9ydCB7IFBPUFVMQVJfU1RPQ0tfU1lNQk9MUyB9IGZyb20gJ0AvbGliL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjYWNoZSB9IGZyb20gJ3JlYWN0JztcblxuXG5jb25zdCBGSU5OSFVCX0JBU0VfVVJMID0gXCJodHRwczovL2Zpbm5odWIuaW8vYXBpL3YxXCI7XG5jb25zdCBGSU5OSFVCX0FQSV9LRVkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSU5OSFVCX0FQSV9LRVk7XG5cbi8qKlxuICogR2VuZXJpYyBmZXRjaCBmdW5jdGlvbiB3aXRoIGNhY2hpbmcgb3B0aW9uc1xuICogQHBhcmFtIHVybCAtIEZ1bGwgVVJMIHRvIGZldGNoXG4gKiBAcGFyYW0gcmV2YWxpZGF0ZVNlY29uZHMgLSBPcHRpb25hbCBjYWNoZSByZXZhbGlkYXRpb24gdGltZSBpbiBzZWNvbmRzXG4gKiBAcmV0dXJucyBQYXJzZWQgSlNPTiByZXNwb25zZVxuICovXG5hc3luYyBmdW5jdGlvbiBmZXRjaEpTT048VD4odXJsOiBzdHJpbmcsIHJldmFsaWRhdGVTZWNvbmRzPzogbnVtYmVyKTogUHJvbWlzZTxUPiB7XG4gICAgY29uc3Qgb3B0aW9uczogUmVxdWVzdEluaXQgPSByZXZhbGlkYXRlU2Vjb25kc1xuICAgICAgICA/IHsgY2FjaGU6ICdmb3JjZS1jYWNoZScsIG5leHQ6IHsgcmV2YWxpZGF0ZTogcmV2YWxpZGF0ZVNlY29uZHMgfSB9XG4gICAgICAgIDogeyBjYWNoZTogJ25vLXN0b3JlJyB9O1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIG9wdGlvbnMpO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn1cblxuLyoqXG4gKiBHZXQgbmV3cyBhcnRpY2xlcyBmb3IgZ2l2ZW4gc3ltYm9scyBvciBnZW5lcmFsIG1hcmtldCBuZXdzXG4gKiBAcGFyYW0gc3ltYm9scyAtIE9wdGlvbmFsIGFycmF5IG9mIHN0b2NrIHN5bWJvbHMgdG8gZmV0Y2ggbmV3cyBmb3JcbiAqIEByZXR1cm5zIEFycmF5IG9mIGZvcm1hdHRlZCBuZXdzIGFydGljbGVzIChtYXggNilcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE5ld3Moc3ltYm9scz86IHN0cmluZ1tdKTogUHJvbWlzZTxNYXJrZXROZXdzQXJ0aWNsZVtdPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKCFGSU5OSFVCX0FQSV9LRVkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmlubmh1YiBBUEkga2V5IGlzIG5vdCBjb25maWd1cmVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb21wdXRlIGRhdGUgcmFuZ2UgZm9yIGxhc3QgNSBkYXlzXG4gICAgICAgIGNvbnN0IHsgZnJvbSwgdG8gfSA9IGdldERhdGVSYW5nZSg1KTtcblxuICAgICAgICAvLyBJZiBzeW1ib2xzIGFyZSBwcm92aWRlZCwgZmV0Y2ggY29tcGFueSBuZXdzXG4gICAgICAgIGlmIChzeW1ib2xzICYmIHN5bWJvbHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gQ2xlYW4gYW5kIHVwcGVyY2FzZSBzeW1ib2xzXG4gICAgICAgICAgICBjb25zdCBjbGVhblN5bWJvbHMgPSBzeW1ib2xzXG4gICAgICAgICAgICAgICAgLm1hcChzID0+IHMudHJpbSgpLnRvVXBwZXJDYXNlKCkpXG4gICAgICAgICAgICAgICAgLmZpbHRlcihzID0+IHMubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICAuc2xpY2UoMCwgMTApOyAvLyBMaW1pdCB0byAxMCBzeW1ib2xzIG1heFxuXG4gICAgICAgICAgICBpZiAoY2xlYW5TeW1ib2xzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIEZhbGxiYWNrIHRvIGdlbmVyYWwgbmV3cyBpZiBubyB2YWxpZCBzeW1ib2xzXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoR2VuZXJhbE5ld3MoZnJvbSwgdG8pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBhcnRpY2xlczogTWFya2V0TmV3c0FydGljbGVbXSA9IFtdO1xuICAgICAgICAgICAgY29uc3QgbWF4Um91bmRzID0gNjtcbiAgICAgICAgICAgIGxldCByb3VuZEluZGV4ID0gMDtcblxuICAgICAgICAgICAgLy8gUm91bmQtcm9iaW4gdGhyb3VnaCBzeW1ib2xzLCBtYXggNiBpdGVyYXRpb25zXG4gICAgICAgICAgICB3aGlsZSAoYXJ0aWNsZXMubGVuZ3RoIDwgNiAmJiByb3VuZEluZGV4IDwgbWF4Um91bmRzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBzeW1ib2wgb2YgY2xlYW5TeW1ib2xzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcnRpY2xlcy5sZW5ndGggPj0gNikgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGAke0ZJTk5IVUJfQkFTRV9VUkx9L2NvbXBhbnktbmV3cz9zeW1ib2w9JHtzeW1ib2x9JmZyb209JHtmcm9tfSZ0bz0ke3RvfSZ0b2tlbj0ke0ZJTk5IVUJfQVBJX0tFWX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3c0RhdGEgPSBhd2FpdCBmZXRjaEpTT048UmF3TmV3c0FydGljbGVbXT4odXJsKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmluZCBmaXJzdCB2YWxpZCBhcnRpY2xlIG5vdCBhbHJlYWR5IGNvbGxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsaWRBcnRpY2xlID0gbmV3c0RhdGEuZmluZCgoYXJ0aWNsZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWRhdGVBcnRpY2xlKGFydGljbGUpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgd2UgYWxyZWFkeSBoYXZlIHRoaXMgYXJ0aWNsZSAoYnkgVVJMKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhYXJ0aWNsZXMuc29tZShhID0+IGEudXJsID09PSBhcnRpY2xlLnVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkQXJ0aWNsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZCA9IGZvcm1hdEFydGljbGUodmFsaWRBcnRpY2xlLCB0cnVlLCBzeW1ib2wsIGFydGljbGVzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZXMucHVzaChmb3JtYXR0ZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgZmV0Y2hpbmcgbmV3cyBmb3IgJHtzeW1ib2x9OmAsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbnRpbnVlIHRvIG5leHQgc3ltYm9sXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcm91bmRJbmRleCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTb3J0IGJ5IGRhdGV0aW1lIChuZXdlc3QgZmlyc3QpIGFuZCByZXR1cm5cbiAgICAgICAgICAgIGFydGljbGVzLnNvcnQoKGEsIGIpID0+IGIuZGF0ZXRpbWUgLSBhLmRhdGV0aW1lKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gSWYgd2UgZ290IGFydGljbGVzLCByZXR1cm4gdGhlbVxuICAgICAgICAgICAgaWYgKGFydGljbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJ0aWNsZXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEZhbGxiYWNrIHRvIGdlbmVyYWwgbmV3cyBpZiBubyBjb21wYW55IG5ld3MgZm91bmRcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBjb21wYW55IG5ld3MgZm91bmQsIGZhbGxpbmcgYmFjayB0byBnZW5lcmFsIG5ld3MnKTtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaEdlbmVyYWxOZXdzKGZyb20sIHRvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5vIHN5bWJvbHMgcHJvdmlkZWQsIGZldGNoIGdlbmVyYWwgbWFya2V0IG5ld3NcbiAgICAgICAgcmV0dXJuIGZldGNoR2VuZXJhbE5ld3MoZnJvbSwgdG8pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldE5ld3M6JywgZXJyb3IpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBuZXdzJyk7XG4gICAgfVxufVxuXG4vKipcbiAqIEZldGNoIGdlbmVyYWwgbWFya2V0IG5ld3NcbiAqIEBwYXJhbSBmcm9tIC0gU3RhcnQgZGF0ZSAoWVlZWS1NTS1ERClcbiAqIEBwYXJhbSB0byAtIEVuZCBkYXRlIChZWVlZLU1NLUREKVxuICogQHJldHVybnMgQXJyYXkgb2YgZm9ybWF0dGVkIG5ld3MgYXJ0aWNsZXMgKG1heCA2KVxuICovXG5hc3luYyBmdW5jdGlvbiBmZXRjaEdlbmVyYWxOZXdzKGZyb206IHN0cmluZywgdG86IHN0cmluZyk6IFByb21pc2U8TWFya2V0TmV3c0FydGljbGVbXT4ge1xuICAgIGlmICghRklOTkhVQl9BUElfS0VZKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmlubmh1YiBBUEkga2V5IGlzIG5vdCBjb25maWd1cmVkJyk7XG4gICAgfVxuXG4gICAgY29uc3QgdXJsID0gYCR7RklOTkhVQl9CQVNFX1VSTH0vbmV3cz9jYXRlZ29yeT1nZW5lcmFsJnRva2VuPSR7RklOTkhVQl9BUElfS0VZfWA7XG4gICAgY29uc3QgbmV3c0RhdGEgPSBhd2FpdCBmZXRjaEpTT048UmF3TmV3c0FydGljbGVbXT4odXJsKTtcblxuICAgIC8vIEZpbHRlciBhbmQgdmFsaWRhdGUgYXJ0aWNsZXNcbiAgICBjb25zdCB2YWxpZEFydGljbGVzID0gbmV3c0RhdGEuZmlsdGVyKHZhbGlkYXRlQXJ0aWNsZSk7XG5cbiAgICAvLyBEZWR1cGxpY2F0ZSBieSBpZCwgdXJsLCBhbmQgaGVhZGxpbmVcbiAgICBjb25zdCBzZWVuSWRzID0gbmV3IFNldDxudW1iZXI+KCk7XG4gICAgY29uc3Qgc2VlblVybHMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBjb25zdCBzZWVuSGVhZGxpbmVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgXG4gICAgY29uc3QgdW5pcXVlQXJ0aWNsZXMgPSB2YWxpZEFydGljbGVzLmZpbHRlcigoYXJ0aWNsZSkgPT4ge1xuICAgICAgICBjb25zdCBpc0R1cGxpY2F0ZSA9IFxuICAgICAgICAgICAgc2Vlbklkcy5oYXMoYXJ0aWNsZS5pZCkgfHwgXG4gICAgICAgICAgICBzZWVuVXJscy5oYXMoYXJ0aWNsZS51cmwhKSB8fCBcbiAgICAgICAgICAgIHNlZW5IZWFkbGluZXMuaGFzKGFydGljbGUuaGVhZGxpbmUhKTtcblxuICAgICAgICBpZiAoIWlzRHVwbGljYXRlKSB7XG4gICAgICAgICAgICBzZWVuSWRzLmFkZChhcnRpY2xlLmlkKTtcbiAgICAgICAgICAgIHNlZW5VcmxzLmFkZChhcnRpY2xlLnVybCEpO1xuICAgICAgICAgICAgc2VlbkhlYWRsaW5lcy5hZGQoYXJ0aWNsZS5oZWFkbGluZSEpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8gVGFrZSB0b3AgNiwgZm9ybWF0IHRoZW1cbiAgICBjb25zdCB0b3BBcnRpY2xlcyA9IHVuaXF1ZUFydGljbGVzLnNsaWNlKDAsIDYpO1xuICAgIFxuICAgIHJldHVybiB0b3BBcnRpY2xlcy5tYXAoKGFydGljbGUsIGluZGV4KSA9PiBcbiAgICAgICAgZm9ybWF0QXJ0aWNsZShhcnRpY2xlLCBmYWxzZSwgdW5kZWZpbmVkLCBpbmRleClcbiAgICApO1xufVxuXG5leHBvcnQgY29uc3Qgc2VhcmNoU3RvY2tzID0gY2FjaGUoYXN5bmMgKHF1ZXJ5Pzogc3RyaW5nKTogUHJvbWlzZTxTdG9ja1dpdGhXYXRjaGxpc3RTdGF0dXNbXT4gPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHRva2VuID0gcHJvY2Vzcy5lbnYuRklOTkhVQl9BUElfS0VZID8/IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJTk5IVUJfQVBJX0tFWTtcbiAgICBpZiAoIXRva2VuKSB7XG4gICAgICAvLyBJZiBubyB0b2tlbiwgbG9nIGFuZCByZXR1cm4gZW1wdHkgdG8gYXZvaWQgdGhyb3dpbmcgcGVyIHJlcXVpcmVtZW50c1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gc3RvY2sgc2VhcmNoOicsIG5ldyBFcnJvcignRklOTkhVQiBBUEkga2V5IGlzIG5vdCBjb25maWd1cmVkJykpO1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IHRyaW1tZWQgPSB0eXBlb2YgcXVlcnkgPT09ICdzdHJpbmcnID8gcXVlcnkudHJpbSgpIDogJyc7XG5cbiAgICBsZXQgcmVzdWx0czogRmlubmh1YlNlYXJjaFJlc3VsdFtdID0gW107XG4gICAgY29uc3QgcHJvZmlsZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBGaW5uaHViU3RvY2tQcm9maWxlIHwgbnVsbD4oKTtcblxuICAgIGlmICghdHJpbW1lZCkge1xuICAgICAgY29uc3QgdG9wID0gUE9QVUxBUl9TVE9DS19TWU1CT0xTLnNsaWNlKDAsIDEwKTtcbiAgICAgIGNvbnN0IGVucmljaGVkID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgIHRvcC5tYXAoYXN5bmMgKHN5bSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHVwcGVyY2FzZVN5bWJvbCA9IHN5bS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgIGNvbnN0IHByb2ZpbGUgPSBhd2FpdCBnZXRTdG9ja1Byb2ZpbGUodXBwZXJjYXNlU3ltYm9sKTtcbiAgICAgICAgICBwcm9maWxlTWFwLnNldCh1cHBlcmNhc2VTeW1ib2wsIHByb2ZpbGUpO1xuXG4gICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBwcm9maWxlPy5uYW1lID8/IHByb2ZpbGU/LnRpY2tlciA/PyB1cHBlcmNhc2VTeW1ib2w7XG5cbiAgICAgICAgICBjb25zdCBlbnRyeTogRmlubmh1YlNlYXJjaFJlc3VsdCA9IHtcbiAgICAgICAgICAgIHN5bWJvbDogdXBwZXJjYXNlU3ltYm9sLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBkaXNwbGF5U3ltYm9sOiB1cHBlcmNhc2VTeW1ib2wsXG4gICAgICAgICAgICB0eXBlOiAnQ29tbW9uIFN0b2NrJyxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgICAgcmVzdWx0cyA9IGVucmljaGVkLmZpbHRlcigoZW50cnkpID0+IEJvb2xlYW4oZW50cnk/LnN5bWJvbCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB1cmwgPSBgJHtGSU5OSFVCX0JBU0VfVVJMfS9zZWFyY2g/cT0ke2VuY29kZVVSSUNvbXBvbmVudCh0cmltbWVkKX0mdG9rZW49JHt0b2tlbn1gO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoSlNPTjxGaW5uaHViU2VhcmNoUmVzcG9uc2U+KHVybCwgMTgwMCk7XG4gICAgICByZXN1bHRzID0gQXJyYXkuaXNBcnJheShkYXRhPy5yZXN1bHQpID8gZGF0YS5yZXN1bHQuc2xpY2UoMCwgMTUpIDogW107XG5cbiAgICAgIGNvbnN0IHVuaXF1ZVN5bWJvbHMgPSBBcnJheS5mcm9tKFxuICAgICAgICBuZXcgU2V0KFxuICAgICAgICAgIHJlc3VsdHNcbiAgICAgICAgICAgIC5tYXAoKHIpID0+IChyLnN5bWJvbCB8fCAnJykudHJpbSgpLnRvVXBwZXJDYXNlKCkpXG4gICAgICAgICAgICAuZmlsdGVyKChzeW0pID0+IHN5bS5sZW5ndGggPiAwKVxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgdW5pcXVlU3ltYm9scy5tYXAoYXN5bmMgKHN5bSkgPT4ge1xuICAgICAgICAgIGlmIChwcm9maWxlTWFwLmhhcyhzeW0pKSByZXR1cm47XG4gICAgICAgICAgY29uc3QgcHJvZmlsZSA9IGF3YWl0IGdldFN0b2NrUHJvZmlsZShzeW0pO1xuICAgICAgICAgIHByb2ZpbGVNYXAuc2V0KHN5bSwgcHJvZmlsZSk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm1hdEV4Y2hhbmdlID0gKHZhbHVlPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoIXZhbHVlKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuIHZhbHVlLnRyaW0oKS50b1VwcGVyQ2FzZSgpO1xuICAgIH07XG5cbiAgICBjb25zdCBpbmZlckV4Y2hhbmdlRnJvbVN5bWJvbCA9ICh2YWx1ZT86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIGNvbnN0IGNhbmRpZGF0ZSA9IHZhbHVlLnRyaW0oKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgaWYgKCFjYW5kaWRhdGUpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICBpZiAoY2FuZGlkYXRlLmluY2x1ZGVzKCc6JykpIHtcbiAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZS5zcGxpdCgnOicpWzBdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFwcGVkOiBTdG9ja1dpdGhXYXRjaGxpc3RTdGF0dXNbXSA9IHJlc3VsdHNcbiAgICAgIC5tYXAoKHIpID0+IHtcbiAgICAgICAgY29uc3QgdXBwZXIgPSAoci5zeW1ib2wgfHwgJycpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGlmICghdXBwZXIpIHJldHVybiBudWxsO1xuXG4gICAgICAgIGNvbnN0IHByb2ZpbGUgPSBwcm9maWxlTWFwLmdldCh1cHBlcikgPz8gbnVsbDtcblxuICAgICAgICBjb25zdCBleGNoYW5nZSA9XG4gICAgICAgICAgZm9ybWF0RXhjaGFuZ2UocHJvZmlsZT8uZXhjaGFuZ2UpID8/XG4gICAgICAgICAgaW5mZXJFeGNoYW5nZUZyb21TeW1ib2woci5kaXNwbGF5U3ltYm9sKSA/P1xuICAgICAgICAgIGluZmVyRXhjaGFuZ2VGcm9tU3ltYm9sKHIuc3ltYm9sKSA/P1xuICAgICAgICAgICdVUyc7XG5cbiAgICAgICAgY29uc3QgbmFtZSA9IHIuZGVzY3JpcHRpb24/LnRyaW0oKSB8fCBwcm9maWxlPy5uYW1lIHx8IHVwcGVyO1xuICAgICAgICBjb25zdCB0eXBlID0gci50eXBlPy50cmltKCkgfHwgJ1N0b2NrJztcblxuICAgICAgICBjb25zdCBpdGVtOiBTdG9ja1dpdGhXYXRjaGxpc3RTdGF0dXMgPSB7XG4gICAgICAgICAgc3ltYm9sOiB1cHBlcixcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIGV4Y2hhbmdlLFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgaXNJbldhdGNobGlzdDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoKGl0ZW0pOiBpdGVtIGlzIFN0b2NrV2l0aFdhdGNobGlzdFN0YXR1cyA9PiBCb29sZWFuKGl0ZW0pKVxuICAgICAgLnNsaWNlKDAsIDE1KTtcblxuICAgIHJldHVybiBtYXBwZWQ7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHN0b2NrIHNlYXJjaDonLCBlcnIpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufSk7XG5cblxuaW50ZXJmYWNlIEZpbm5odWJRdW90ZSB7XG4gICAgYzogbnVtYmVyOyAgLy8gQ3VycmVudCBwcmljZVxuICAgIGQ6IG51bWJlcjsgIC8vIENoYW5nZVxuICAgIGRwOiBudW1iZXI7IC8vIFBlcmNlbnQgY2hhbmdlXG4gICAgaDogbnVtYmVyOyAgLy8gSGlnaFxuICAgIGw6IG51bWJlcjsgIC8vIExvd1xuICAgIG86IG51bWJlcjsgIC8vIE9wZW5cbiAgICBwYzogbnVtYmVyOyAvLyBQcmV2aW91cyBjbG9zZVxufVxuXG5pbnRlcmZhY2UgRmlubmh1Yk1ldHJpY3Mge1xuICAgIG1ldHJpYzoge1xuICAgICAgICBwZUJhc2ljRXhjbEV4dHJhVFRNPzogbnVtYmVyO1xuICAgICAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gICAgfTtcbn1cblxuZXhwb3J0IHR5cGUgRmlubmh1YlN0b2NrUHJvZmlsZSA9IHtcbiAgICBjb3VudHJ5Pzogc3RyaW5nO1xuICAgIGN1cnJlbmN5Pzogc3RyaW5nO1xuICAgIGV4Y2hhbmdlPzogc3RyaW5nO1xuICAgIGlwbz86IHN0cmluZztcbiAgICBsb2dvPzogc3RyaW5nO1xuICAgIG1hcmtldENhcGl0YWxpemF0aW9uPzogbnVtYmVyO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgcGhvbmU/OiBzdHJpbmc7XG4gICAgc2hhcmVPdXRzdGFuZGluZz86IG51bWJlcjtcbiAgICB0aWNrZXI/OiBzdHJpbmc7XG4gICAgd2VidXJsPzogc3RyaW5nO1xuICAgIHByaWNlPzogbnVtYmVyO1xuICAgIGNoYW5nZT86IG51bWJlcjtcbiAgICBjaGFuZ2VQZXJjZW50PzogbnVtYmVyO1xuICAgIHBlUmF0aW8/OiBudW1iZXI7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RvY2tQcm9maWxlID0gY2FjaGUoYXN5bmMgKHN5bWJvbDogc3RyaW5nKTogUHJvbWlzZTxGaW5uaHViU3RvY2tQcm9maWxlIHwgbnVsbD4gPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gcHJvY2Vzcy5lbnYuRklOTkhVQl9BUElfS0VZID8/IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJTk5IVUJfQVBJX0tFWTtcbiAgICAgICAgaWYgKCF0b2tlbikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgc3RvY2sgcHJvZmlsZTonLCBuZXcgRXJyb3IoJ0ZJTk5IVUIgQVBJIGtleSBpcyBub3QgY29uZmlndXJlZCcpKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdHJpbW1lZCA9IHR5cGVvZiBzeW1ib2wgPT09ICdzdHJpbmcnID8gc3ltYm9sLnRyaW0oKS50b1VwcGVyQ2FzZSgpIDogJyc7XG4gICAgICAgIGlmICghdHJpbW1lZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9maWxlVXJsID0gYCR7RklOTkhVQl9CQVNFX1VSTH0vc3RvY2svcHJvZmlsZTI/c3ltYm9sPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHRyaW1tZWQpfSZ0b2tlbj0ke3Rva2VufWA7XG4gICAgICAgIGNvbnN0IHF1b3RlVXJsID0gYCR7RklOTkhVQl9CQVNFX1VSTH0vcXVvdGU/c3ltYm9sPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHRyaW1tZWQpfSZ0b2tlbj0ke3Rva2VufWA7XG4gICAgICAgIGNvbnN0IG1ldHJpY3NVcmwgPSBgJHtGSU5OSFVCX0JBU0VfVVJMfS9zdG9jay9tZXRyaWM/c3ltYm9sPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHRyaW1tZWQpfSZtZXRyaWM9YWxsJnRva2VuPSR7dG9rZW59YDtcblxuICAgICAgICBjb25zdCBbcHJvZmlsZVJlc3VsdCwgcXVvdGVSZXN1bHQsIG1ldHJpY3NSZXN1bHRdID0gYXdhaXQgUHJvbWlzZS5hbGxTZXR0bGVkKFtcbiAgICAgICAgICAgIGZldGNoSlNPTjxGaW5uaHViU3RvY2tQcm9maWxlPihwcm9maWxlVXJsLCAxODAwKSxcbiAgICAgICAgICAgIGZldGNoSlNPTjxGaW5uaHViUXVvdGU+KHF1b3RlVXJsLCA2MCksIC8vIENhY2hlIHF1b3RlIGZvciA2MHNcbiAgICAgICAgICAgIGZldGNoSlNPTjxGaW5uaHViTWV0cmljcz4obWV0cmljc1VybCwgMTgwMClcbiAgICAgICAgXSk7XG5cbiAgICAgICAgbGV0IHByb2ZpbGUgPSBwcm9maWxlUmVzdWx0LnN0YXR1cyA9PT0gJ2Z1bGZpbGxlZCcgPyBwcm9maWxlUmVzdWx0LnZhbHVlIDogbnVsbDtcblxuICAgICAgICBpZiAoIXByb2ZpbGUgJiYgKHF1b3RlUmVzdWx0LnN0YXR1cyA9PT0gJ2Z1bGZpbGxlZCcgfHwgbWV0cmljc1Jlc3VsdC5zdGF0dXMgPT09ICdmdWxmaWxsZWQnKSkge1xuICAgICAgICAgICAgIC8vIElmIHByb2ZpbGUgZmFpbGVkIGJ1dCBvdGhlcnMgc3VjY2VlZGVkLCBjcmVhdGUgYSBwYXJ0aWFsIHByb2ZpbGVcbiAgICAgICAgICAgICBwcm9maWxlID0geyB0aWNrZXI6IHRyaW1tZWQgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcHJvZmlsZSkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgaWYgKHF1b3RlUmVzdWx0LnN0YXR1cyA9PT0gJ2Z1bGZpbGxlZCcpIHtcbiAgICAgICAgICAgIHByb2ZpbGUucHJpY2UgPSBxdW90ZVJlc3VsdC52YWx1ZS5jO1xuICAgICAgICAgICAgcHJvZmlsZS5jaGFuZ2UgPSBxdW90ZVJlc3VsdC52YWx1ZS5kO1xuICAgICAgICAgICAgcHJvZmlsZS5jaGFuZ2VQZXJjZW50ID0gcXVvdGVSZXN1bHQudmFsdWUuZHA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWV0cmljc1Jlc3VsdC5zdGF0dXMgPT09ICdmdWxmaWxsZWQnKSB7XG4gICAgICAgICAgICBwcm9maWxlLnBlUmF0aW8gPSBtZXRyaWNzUmVzdWx0LnZhbHVlLm1ldHJpYz8ucGVCYXNpY0V4Y2xFeHRyYVRUTTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcm9maWxlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGZldGNoaW5nIHN0b2NrIHByb2ZpbGUgZm9yICR7c3ltYm9sfTpgLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ1U0EyU2EifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(root)/watchlist/columns.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "columns",
    ()=>columns
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
const columns = [
    {
        accessorKey: "Company",
        header: "Company",
        cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "font-medium",
                children: row.getValue("Company")
            }, void 0, false, {
                fileName: "[project]/app/(root)/watchlist/columns.tsx",
                lineNumber: 19,
                columnNumber: 24
            }, ("TURBOPACK compile-time value", void 0))
    },
    {
        accessorKey: "Symbol",
        header: "Symbol",
        cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "font-medium",
                children: row.getValue("Symbol")
            }, void 0, false, {
                fileName: "[project]/app/(root)/watchlist/columns.tsx",
                lineNumber: 24,
                columnNumber: 24
            }, ("TURBOPACK compile-time value", void 0))
    },
    {
        accessorKey: "Price",
        header: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-right",
                children: "Price"
            }, void 0, false, {
                fileName: "[project]/app/(root)/watchlist/columns.tsx",
                lineNumber: 28,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
        cell: ({ row })=>{
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-right font-medium",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(row.getValue("Price"))
            }, void 0, false, {
                fileName: "[project]/app/(root)/watchlist/columns.tsx",
                lineNumber: 30,
                columnNumber: 16
            }, ("TURBOPACK compile-time value", void 0));
        }
    },
    {
        accessorKey: "Change",
        header: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-right",
                children: "Change"
            }, void 0, false, {
                fileName: "[project]/app/(root)/watchlist/columns.tsx",
                lineNumber: 35,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
        cell: ({ row })=>{
            const change = parseFloat(row.getValue("Change"));
            const isPositive = change > 0;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `text-right font-medium ${isPositive ? "text-green-500" : "text-red-500"}`,
                children: [
                    isPositive ? "+" : "",
                    change.toFixed(2),
                    "%"
                ]
            }, void 0, true, {
                fileName: "[project]/app/(root)/watchlist/columns.tsx",
                lineNumber: 40,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
        }
    },
    {
        accessorKey: "MarketCap",
        header: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-right",
                children: "Market Cap"
            }, void 0, false, {
                fileName: "[project]/app/(root)/watchlist/columns.tsx",
                lineNumber: 48,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
        cell: ({ row })=>{
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-right",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMarketCapValue"])(row.getValue("MarketCap"))
            }, void 0, false, {
                fileName: "[project]/app/(root)/watchlist/columns.tsx",
                lineNumber: 50,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0));
        }
    },
    {
        accessorKey: "peRatio",
        header: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-right",
                children: "P/E Ratio"
            }, void 0, false, {
                fileName: "[project]/app/(root)/watchlist/columns.tsx",
                lineNumber: 55,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
        cell: ({ row })=>{
            const val = row.getValue("peRatio");
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-right",
                children: val ? val.toFixed(1) : "N/A"
            }, void 0, false, {
                fileName: "[project]/app/(root)/watchlist/columns.tsx",
                lineNumber: 58,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0));
        }
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/table.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>Table,
    "TableBody",
    ()=>TableBody,
    "TableCaption",
    ()=>TableCaption,
    "TableCell",
    ()=>TableCell,
    "TableFooter",
    ()=>TableFooter,
    "TableHead",
    ()=>TableHead,
    "TableHeader",
    ()=>TableHeader,
    "TableRow",
    ()=>TableRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
function Table({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "table-container",
        className: "relative w-full overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            "data-slot": "table",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full caption-bottom text-sm", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/table.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Table;
function TableHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        "data-slot": "table-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr]:border-b", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c1 = TableHeader;
function TableBody({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        "data-slot": "table-body",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("[&_tr:last-child]:border-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c2 = TableBody;
function TableFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        "data-slot": "table-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_c3 = TableFooter;
function TableRow({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        "data-slot": "table-row",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_c4 = TableRow;
function TableHead({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        "data-slot": "table-head",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_c5 = TableHead;
function TableCell({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        "data-slot": "table-cell",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_c6 = TableCell;
function TableCaption({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        "data-slot": "table-caption",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground mt-4 text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_c7 = TableCaption;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "Table");
__turbopack_context__.k.register(_c1, "TableHeader");
__turbopack_context__.k.register(_c2, "TableBody");
__turbopack_context__.k.register(_c3, "TableFooter");
__turbopack_context__.k.register(_c4, "TableRow");
__turbopack_context__.k.register(_c5, "TableHead");
__turbopack_context__.k.register(_c6, "TableCell");
__turbopack_context__.k.register(_c7, "TableCaption");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(root)/watchlist/data-table.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataTable",
    ()=>DataTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-table/build/lib/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/table-core/build/lib/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/table.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function DataTable({ columns, data, onRemove }) {
    _s();
    const table = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactTable"])({
        data,
        columns,
        getCoreRowModel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCoreRowModel"])()
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-lg border border-gray-600 bg-gray-800 overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
            className: "w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                    className: "bg-gray-700",
                    children: table.getHeaderGroups().map((headerGroup)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                            className: "border-gray-600 hover:bg-gray-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                    className: "w-[50px] text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/app/(root)/watchlist/data-table.tsx",
                                    lineNumber: 44,
                                    columnNumber: 29
                                }, this),
                                headerGroup.headers.map((header)=>{
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        className: "text-gray-400 font-medium h-12",
                                        children: header.isPlaceholder ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flexRender"])(header.column.columnDef.header, header.getContext())
                                    }, header.id, false, {
                                        fileName: "[project]/app/(root)/watchlist/data-table.tsx",
                                        lineNumber: 47,
                                        columnNumber: 37
                                    }, this);
                                })
                            ]
                        }, headerGroup.id, true, {
                            fileName: "[project]/app/(root)/watchlist/data-table.tsx",
                            lineNumber: 43,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/(root)/watchlist/data-table.tsx",
                    lineNumber: 41,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                    children: table.getRowModel().rows?.length ? table.getRowModel().rows.map((row)=>{
                        // Safe cast since we know this table is used for WatchListRow data in this context
                        const symbol = row.original.Symbol;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                            "data-state": row.getIsSelected() && "selected",
                            className: "border-gray-600 hover:bg-gray-700/50 transition-colors data-[state=selected]:bg-gray-700",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                    className: "py-3 pl-4 border border-gray-600",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            e.stopPropagation();
                                            onRemove?.(symbol);
                                        },
                                        className: "group flex items-center justify-center rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-700 hover:text-yellow-400",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            className: "h-5 w-5 text-yellow-400 fill-current"
                                        }, void 0, false, {
                                            fileName: "[project]/app/(root)/watchlist/data-table.tsx",
                                            lineNumber: 81,
                                            columnNumber: 45
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/(root)/watchlist/data-table.tsx",
                                        lineNumber: 73,
                                        columnNumber: 41
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/(root)/watchlist/data-table.tsx",
                                    lineNumber: 72,
                                    columnNumber: 37
                                }, this),
                                row.getVisibleCells().map((cell)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        className: "text-gray-100 font-medium py-3 border border-gray-600",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flexRender"])(cell.column.columnDef.cell, cell.getContext())
                                    }, cell.id, false, {
                                        fileName: "[project]/app/(root)/watchlist/data-table.tsx",
                                        lineNumber: 87,
                                        columnNumber: 41
                                    }, this))
                            ]
                        }, row.id, true, {
                            fileName: "[project]/app/(root)/watchlist/data-table.tsx",
                            lineNumber: 67,
                            columnNumber: 33
                        }, this);
                    }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                        className: "hover:bg-transparent border-gray-600",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                            colSpan: columns.length + 1,
                            className: "h-24 text-center text-gray-500",
                            children: "No results."
                        }, void 0, false, {
                            fileName: "[project]/app/(root)/watchlist/data-table.tsx",
                            lineNumber: 96,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/(root)/watchlist/data-table.tsx",
                        lineNumber: 95,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/(root)/watchlist/data-table.tsx",
                    lineNumber: 60,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/(root)/watchlist/data-table.tsx",
            lineNumber: 40,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/(root)/watchlist/data-table.tsx",
        lineNumber: 39,
        columnNumber: 9
    }, this);
}
_s(DataTable, "+qfJc9U8evODZQ8bBg9G2KVouAc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactTable"]
    ];
});
_c = DataTable;
var _c;
__turbopack_context__.k.register(_c, "DataTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(root)/watchlist/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$watchlist$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/watchlist/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$a4e3c4__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/actions/data:a4e3c4 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$watchlist$2f$columns$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(root)/watchlist/columns.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$watchlist$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/(root)/watchlist/data-table.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const WatchlistPage = ()=>{
    _s();
    const [symbols, setSymbols] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [watchlistRows, setWatchlistRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [removingId, setRemovingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WatchlistPage.useEffect": ()=>{
            const loadData = {
                "WatchlistPage.useEffect.loadData": async ()=>{
                    try {
                        setLoading(true);
                        // 1. Fetch symbols first
                        const symbolData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$watchlist$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllWatchlistSymbols"])();
                        setSymbols(symbolData);
                        console.log("Fetched symbols:", symbolData);
                        // 2. Use the data DIRECTLY to fetch profiles (no waiting for state)
                        // We use Promise.all to fetch all profiles in parallel
                        const profilePromises = symbolData.map({
                            "WatchlistPage.useEffect.loadData.profilePromises": (symbol)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$a4e3c4__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getStockProfile"])(symbol)
                        }["WatchlistPage.useEffect.loadData.profilePromises"]);
                        const profiles = await Promise.all(profilePromises);
                        // Filter out any failed requests (nulls)
                        const validProfiles = profiles.filter({
                            "WatchlistPage.useEffect.loadData.validProfiles": (p)=>p !== null
                        }["WatchlistPage.useEffect.loadData.validProfiles"]);
                        const newRows = validProfiles.map({
                            "WatchlistPage.useEffect.loadData.newRows": (profile)=>({
                                    Company: profile.name ?? '',
                                    Symbol: profile.ticker ?? '',
                                    Price: profile.price ?? 0,
                                    Change: profile.change ?? 0,
                                    MarketCap: profile.marketCapitalization ?? 0,
                                    peRatio: profile.peRatio ?? 0
                                })
                        }["WatchlistPage.useEffect.loadData.newRows"]);
                        setWatchlistRows(newRows);
                    } catch (err) {
                        console.error('Failed to load watchlist data:', err);
                        setError('Failed to load watchlist');
                    } finally{
                        setLoading(false);
                    }
                }
            }["WatchlistPage.useEffect.loadData"];
            loadData();
        }
    }["WatchlistPage.useEffect"], []);
    // OnClick the symbol must be removed from the watchlist from mongodb and the watchlist state must be updated
    const handleRemoveSymbol = async (symbol)=>{
        if (removingId) return; // Prevent multiple clicks while animating
        // Start animation
        setRemovingId(symbol);
        // Wait for animation to finish (500ms)
        await new Promise((resolve)=>setTimeout(resolve, 500));
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$watchlist$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeFromWatchlist"])(symbol);
            // Toast saying symbol removed from watchlist
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`${symbol} removed from watchlist`);
            // Update local state only after successful removal
            setSymbols((prev)=>prev.filter((s)=>s !== symbol));
            setWatchlistRows((prev)=>prev.filter((row)=>row.Symbol !== symbol));
        } catch (err) {
            console.error('Failed to remove from watchlist:', err);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(`Failed to remove ${symbol} from watchlist`);
            setRemovingId(null); // Reset if failed so it reappears
        }
    };
    const removeFromWatchList = async (event, symbol)=>{
        event.preventDefault();
        event.stopPropagation();
        await handleRemoveSymbol(symbol);
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-[400px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "h-8 w-8 animate-spin text-yellow-500"
            }, void 0, false, {
                fileName: "[project]/app/(root)/watchlist/page.tsx",
                lineNumber: 95,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/(root)/watchlist/page.tsx",
            lineNumber: 94,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-[400px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-500",
                children: error
            }, void 0, false, {
                fileName: "[project]/app/(root)/watchlist/page.tsx",
                lineNumber: 103,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/(root)/watchlist/page.tsx",
            lineNumber: 102,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$watchlist$2f$data$2d$table$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DataTable"], {
                columns: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f28$root$292f$watchlist$2f$columns$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["columns"],
                data: watchlistRows,
                onRemove: handleRemoveSymbol
            }, void 0, false, {
                fileName: "[project]/app/(root)/watchlist/page.tsx",
                lineNumber: 111,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/(root)/watchlist/page.tsx",
            lineNumber: 110,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
_s(WatchlistPage, "ovtwS2h97O3LNbNH+34kuna3Im8=");
_c = WatchlistPage;
const __TURBOPACK__default__export__ = WatchlistPage;
var _c;
__turbopack_context__.k.register(_c, "WatchlistPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_8f65d192._.js.map