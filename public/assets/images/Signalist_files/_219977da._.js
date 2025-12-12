(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ADVANCED_CHART_WIDGET_CONFIG",
    ()=>ADVANCED_CHART_WIDGET_CONFIG,
    "ADVANCED_LINE_CHART_WIDGET_CONFIG",
    ()=>ADVANCED_LINE_CHART_WIDGET_CONFIG,
    "ALERT_TYPE_OPTIONS",
    ()=>ALERT_TYPE_OPTIONS,
    "CONDITION_OPTIONS",
    ()=>CONDITION_OPTIONS,
    "FINANCIALS_WIDGET_CONFIG",
    ()=>FINANCIALS_WIDGET_CONFIG,
    "HEATMAP_WIDGET_CONFIG",
    ()=>HEATMAP_WIDGET_CONFIG,
    "INVESTMENT_GOALS",
    ()=>INVESTMENT_GOALS,
    "MARKET_DATA_WIDGET_CONFIG",
    ()=>MARKET_DATA_WIDGET_CONFIG,
    "MARKET_OVERVIEW_WIDGET_CONFIG",
    ()=>MARKET_OVERVIEW_WIDGET_CONFIG,
    "NAV_ITEMS",
    ()=>NAV_ITEMS,
    "POPULAR_STOCK_SYMBOLS",
    ()=>POPULAR_STOCK_SYMBOLS,
    "PREFERRED_INDUSTRIES",
    ()=>PREFERRED_INDUSTRIES,
    "RISK_TOLERANCE_OPTIONS",
    ()=>RISK_TOLERANCE_OPTIONS,
    "SYMBOL_INFO_WIDGET_CONFIG",
    ()=>SYMBOL_INFO_WIDGET_CONFIG,
    "SYMBOL_PROFILE_WIDGET_CONFIG",
    ()=>SYMBOL_PROFILE_WIDGET_CONFIG,
    "TECHNICAL_ANALYSIS_WIDGET_CONFIG",
    ()=>TECHNICAL_ANALYSIS_WIDGET_CONFIG,
    "TICKER_TAPE_WIDGET_CONFIG",
    ()=>TICKER_TAPE_WIDGET_CONFIG,
    "TOP_STORIES_WIDGET_CONFIG",
    ()=>TOP_STORIES_WIDGET_CONFIG
]);
const NAV_ITEMS = [
    {
        href: '/',
        label: 'Dashboard'
    },
    {
        href: '/search',
        label: 'Search'
    },
    {
        href: '/watchlist',
        label: 'Watchlist'
    }
];
const INVESTMENT_GOALS = [
    {
        value: 'Growth',
        label: 'Growth'
    },
    {
        value: 'Income',
        label: 'Income'
    },
    {
        value: 'Balanced',
        label: 'Balanced'
    },
    {
        value: 'Conservative',
        label: 'Conservative'
    }
];
const RISK_TOLERANCE_OPTIONS = [
    {
        value: 'Low',
        label: 'Low'
    },
    {
        value: 'Medium',
        label: 'Medium'
    },
    {
        value: 'High',
        label: 'High'
    }
];
const PREFERRED_INDUSTRIES = [
    {
        value: 'Technology',
        label: 'Technology'
    },
    {
        value: 'Healthcare',
        label: 'Healthcare'
    },
    {
        value: 'Finance',
        label: 'Finance'
    },
    {
        value: 'Energy',
        label: 'Energy'
    },
    {
        value: 'Consumer Goods',
        label: 'Consumer Goods'
    }
];
const ALERT_TYPE_OPTIONS = [
    {
        value: 'price',
        label: 'Price'
    },
    {
        value: 'volume',
        label: 'Volume'
    }
];
const CONDITION_OPTIONS = [
    {
        value: 'greater',
        label: 'Greater than (>)'
    },
    {
        value: 'less',
        label: 'Less than (<)'
    }
];
const SYMBOL_INFO_WIDGET_CONFIG = (symbol)=>({
        symbol,
        colorTheme: 'dark',
        isTransparent: true,
        locale: 'en',
        width: '100%',
        height: '220',
        showIntervalTabs: true
    });
_c = SYMBOL_INFO_WIDGET_CONFIG;
const ADVANCED_CHART_WIDGET_CONFIG = (symbol = 'NASDAQ:AAPL')=>({
        symbol,
        autosize: false,
        width: '100%',
        height: 600,
        interval: '60',
        timezone: 'Etc/UTC',
        theme: 'dark',
        style: '1',
        locale: 'en',
        allow_symbol_change: true,
        hide_side_toolbar: false,
        withdateranges: true,
        details: true,
        calendar: false,
        support_host: 'https://www.tradingview.com'
    });
_c1 = ADVANCED_CHART_WIDGET_CONFIG;
const ADVANCED_LINE_CHART_WIDGET_CONFIG = (symbol = 'NASDAQ:AAPL')=>({
        ...ADVANCED_CHART_WIDGET_CONFIG(symbol),
        chartType: 'line',
        style: '3',
        height: 600
    });
_c2 = ADVANCED_LINE_CHART_WIDGET_CONFIG;
const TECHNICAL_ANALYSIS_WIDGET_CONFIG = (symbol = 'NASDAQ:AAPL')=>({
        symbol,
        colorTheme: 'dark',
        displayMode: 'single',
        isTransparent: true,
        locale: 'en',
        interval: '1m',
        disableInterval: false,
        width: '100%',
        height: 450,
        showIntervalTabs: true
    });
_c3 = TECHNICAL_ANALYSIS_WIDGET_CONFIG;
const SYMBOL_PROFILE_WIDGET_CONFIG = (symbol = 'NASDAQ:AAPL')=>({
        symbol,
        colorTheme: 'dark',
        isTransparent: true,
        locale: 'en',
        width: '100%',
        height: 450
    });
_c4 = SYMBOL_PROFILE_WIDGET_CONFIG;
const FINANCIALS_WIDGET_CONFIG = (symbol = 'NASDAQ:AAPL')=>({
        symbol,
        colorTheme: 'dark',
        isTransparent: true,
        locale: 'en',
        displayMode: 'regular',
        width: '100%',
        height: 540
    });
_c5 = FINANCIALS_WIDGET_CONFIG;
const TICKER_TAPE_WIDGET_CONFIG = {
    symbols: [
        {
            proName: 'FOREXCOM:SPXUSD',
            title: 'S&P 500 Index'
        },
        {
            proName: 'FOREXCOM:NSXUSD',
            title: 'US 100 Cash CFD'
        },
        {
            proName: 'FX_IDC:EURUSD',
            title: 'EUR to USD'
        },
        {
            proName: 'BITSTAMP:BTCUSD',
            title: 'Bitcoin'
        },
        {
            proName: 'BITSTAMP:ETHUSD',
            title: 'Ethereum'
        }
    ],
    colorTheme: 'dark',
    locale: 'en',
    largeChartUrl: '',
    isTransparent: true,
    showSymbolLogo: true,
    displayMode: 'adaptive'
};
const MARKET_OVERVIEW_WIDGET_CONFIG = {
    colorTheme: 'dark',
    dateRange: '12M',
    locale: 'en',
    largeChartUrl: '',
    isTransparent: true,
    showFloatingTooltip: true,
    plotLineColorGrowing: '#0FEDBE',
    plotLineColorFalling: '#0FEDBE',
    gridLineColor: 'rgba(240, 243, 250, 0)',
    scaleFontColor: '#DBDBDB',
    belowLineFillColorGrowing: 'rgba(41, 98, 255, 0.12)',
    belowLineFillColorFalling: 'rgba(41, 98, 255, 0.12)',
    belowLineFillColorGrowingBottom: 'rgba(41, 98, 255, 0)',
    belowLineFillColorFallingBottom: 'rgba(41, 98, 255, 0)',
    symbolActiveColor: 'rgba(15, 237, 190, 0.05)',
    tabs: [
        {
            title: 'Financial',
            symbols: [
                {
                    s: 'NYSE:JPM',
                    d: 'JPMorgan Chase'
                },
                {
                    s: 'NYSE:WFC',
                    d: 'Wells Fargo Co New'
                },
                {
                    s: 'NYSE:BAC',
                    d: 'Bank Amer Corp'
                },
                {
                    s: 'NYSE:HSBC',
                    d: 'Hsbc Hldgs Plc'
                },
                {
                    s: 'NYSE:C',
                    d: 'Citigroup Inc'
                },
                {
                    s: 'NYSE:MA',
                    d: 'Mastercard Incorporated'
                }
            ]
        },
        {
            title: 'Technology',
            symbols: [
                {
                    s: 'NASDAQ:AAPL',
                    d: 'Apple'
                },
                {
                    s: 'NASDAQ:GOOGL',
                    d: 'Alphabet'
                },
                {
                    s: 'NASDAQ:MSFT',
                    d: 'Microsoft'
                },
                {
                    s: 'NASDAQ:FB',
                    d: 'Meta Platforms'
                },
                {
                    s: 'NYSE:ORCL',
                    d: 'Oracle Corp'
                },
                {
                    s: 'NASDAQ:INTC',
                    d: 'Intel Corp'
                }
            ]
        },
        {
            title: 'Services',
            symbols: [
                {
                    s: 'NASDAQ:AMZN',
                    d: 'Amazon'
                },
                {
                    s: 'NYSE:BABA',
                    d: 'Alibaba Group Hldg Ltd'
                },
                {
                    s: 'NYSE:T',
                    d: 'At&t Inc'
                },
                {
                    s: 'NYSE:WMT',
                    d: 'Walmart'
                },
                {
                    s: 'NYSE:V',
                    d: 'Visa'
                }
            ]
        }
    ],
    support_host: 'https://www.tradingview.com',
    backgroundColor: '#141414',
    width: '100%',
    height: 600,
    showSymbolLogo: true,
    showChart: true
};
const HEATMAP_WIDGET_CONFIG = {
    dataSource: 'SPX500',
    blockSize: 'market_cap_basic',
    blockColor: 'change',
    grouping: 'sector',
    isTransparent: true,
    locale: 'en',
    symbolUrl: '',
    colorTheme: 'dark',
    exchanges: [],
    hasTopBar: false,
    isDataSetEnabled: false,
    isZoomEnabled: true,
    hasSymbolTooltip: true,
    isMonoSize: false,
    width: '100%',
    height: '600'
};
const TOP_STORIES_WIDGET_CONFIG = {
    displayMode: 'regular',
    feedMode: 'market',
    colorTheme: 'dark',
    isTransparent: true,
    locale: 'en',
    market: 'stock',
    width: '100%',
    height: '600'
};
const MARKET_DATA_WIDGET_CONFIG = {
    title: 'Stocks',
    width: '100%',
    height: 600,
    locale: 'en',
    showSymbolLogo: true,
    colorTheme: 'dark',
    isTransparent: false,
    backgroundColor: '#0F0F0F',
    symbolsGroups: [
        {
            name: 'Financial',
            symbols: [
                {
                    name: 'NYSE:JPM',
                    displayName: 'JPMorgan Chase'
                },
                {
                    name: 'NYSE:WFC',
                    displayName: 'Wells Fargo Co New'
                },
                {
                    name: 'NYSE:BAC',
                    displayName: 'Bank Amer Corp'
                },
                {
                    name: 'NYSE:HSBC',
                    displayName: 'Hsbc Hldgs Plc'
                },
                {
                    name: 'NYSE:C',
                    displayName: 'Citigroup Inc'
                },
                {
                    name: 'NYSE:MA',
                    displayName: 'Mastercard Incorporated'
                }
            ]
        },
        {
            name: 'Technology',
            symbols: [
                {
                    name: 'NASDAQ:AAPL',
                    displayName: 'Apple'
                },
                {
                    name: 'NASDAQ:GOOGL',
                    displayName: 'Alphabet'
                },
                {
                    name: 'NASDAQ:MSFT',
                    displayName: 'Microsoft'
                },
                {
                    name: 'NASDAQ:FB',
                    displayName: 'Meta Platforms'
                },
                {
                    name: 'NYSE:ORCL',
                    displayName: 'Oracle Corp'
                },
                {
                    name: 'NASDAQ:INTC',
                    displayName: 'Intel Corp'
                }
            ]
        },
        {
            name: 'Services',
            symbols: [
                {
                    name: 'NASDAQ:AMZN',
                    displayName: 'Amazon'
                },
                {
                    name: 'NYSE:BABA',
                    displayName: 'Alibaba Group Hldg Ltd'
                },
                {
                    name: 'NYSE:T',
                    displayName: 'At&t Inc'
                },
                {
                    name: 'NYSE:WMT',
                    displayName: 'Walmart'
                },
                {
                    name: 'NYSE:V',
                    displayName: 'Visa'
                }
            ]
        }
    ]
};
const POPULAR_STOCK_SYMBOLS = [
    // Tech Giants (the big technology companies)
    'AAPL',
    'MSFT',
    'GOOGL',
    'AMZN',
    'TSLA',
    'META',
    'NVDA',
    'NFLX',
    'ORCL',
    'CRM',
    // Growing Tech Companies
    'ADBE',
    'INTC',
    'AMD',
    'PYPL',
    'UBER',
    'ZOOM',
    'SPOT',
    'SQ',
    'SHOP',
    'ROKU',
    // Newer Tech Companies
    'SNOW',
    'PLTR',
    'COIN',
    'RBLX',
    'DDOG',
    'CRWD',
    'NET',
    'OKTA',
    'TWLO',
    'ZM',
    // Consumer & Delivery Apps
    'DOCU',
    'PTON',
    'PINS',
    'SNAP',
    'LYFT',
    'DASH',
    'ABNB',
    'RIVN',
    'LCID',
    'NIO',
    // International Companies
    'XPEV',
    'LI',
    'BABA',
    'JD',
    'PDD',
    'TME',
    'BILI',
    'DIDI',
    'GRAB',
    'SE'
];
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "SYMBOL_INFO_WIDGET_CONFIG");
__turbopack_context__.k.register(_c1, "ADVANCED_CHART_WIDGET_CONFIG");
__turbopack_context__.k.register(_c2, "ADVANCED_LINE_CHART_WIDGET_CONFIG");
__turbopack_context__.k.register(_c3, "TECHNICAL_ANALYSIS_WIDGET_CONFIG");
__turbopack_context__.k.register(_c4, "SYMBOL_PROFILE_WIDGET_CONFIG");
__turbopack_context__.k.register(_c5, "FINANCIALS_WIDGET_CONFIG");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateNewsDistribution",
    ()=>calculateNewsDistribution,
    "cn",
    ()=>cn,
    "delay",
    ()=>delay,
    "formatArticle",
    ()=>formatArticle,
    "formatChangePercent",
    ()=>formatChangePercent,
    "formatDateToday",
    ()=>formatDateToday,
    "formatMarketCapValue",
    ()=>formatMarketCapValue,
    "formatPrice",
    ()=>formatPrice,
    "formatTimeAgo",
    ()=>formatTimeAgo,
    "getAlertText",
    ()=>getAlertText,
    "getChangeColorClass",
    ()=>getChangeColorClass,
    "getDateRange",
    ()=>getDateRange,
    "getFormattedTodayDate",
    ()=>getFormattedTodayDate,
    "getTodayDateRange",
    ()=>getTodayDateRange,
    "getTodayString",
    ()=>getTodayString,
    "validateArticle",
    ()=>validateArticle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
const formatTimeAgo = (timestamp)=>{
    const now = Date.now();
    const diffInMs = now - timestamp * 1000; // Convert to milliseconds
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    if (diffInHours > 24) {
        const days = Math.floor(diffInHours / 24);
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (diffInHours >= 1) {
        return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    } else {
        return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
    }
};
function delay(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
function formatMarketCapValue(marketCapUsd) {
    if (!Number.isFinite(marketCapUsd) || marketCapUsd <= 0) return 'N/A';
    if (marketCapUsd >= 1e12) return `$${(marketCapUsd / 1e12).toFixed(2)}T`; // Trillions
    if (marketCapUsd >= 1e9) return `$${(marketCapUsd / 1e9).toFixed(2)}B`; // Billions
    if (marketCapUsd >= 1e6) return `$${(marketCapUsd / 1e6).toFixed(2)}M`; // Millions
    return `$${marketCapUsd.toFixed(2)}`; // Below one million, show full USD amount
}
const getDateRange = (days)=>{
    const toDate = new Date();
    const fromDate = new Date();
    fromDate.setDate(toDate.getDate() - days);
    return {
        to: toDate.toISOString().split('T')[0],
        from: fromDate.toISOString().split('T')[0]
    };
};
const getTodayDateRange = ()=>{
    const today = new Date();
    const todayString = today.toISOString().split('T')[0];
    return {
        to: todayString,
        from: todayString
    };
};
const calculateNewsDistribution = (symbolsCount)=>{
    let itemsPerSymbol;
    let targetNewsCount = 6;
    if (symbolsCount < 3) {
        itemsPerSymbol = 3; // Fewer symbols, more news each
    } else if (symbolsCount === 3) {
        itemsPerSymbol = 2; // Exactly 3 symbols, 2 news each = 6 total
    } else {
        itemsPerSymbol = 1; // Many symbols, 1 news each
        targetNewsCount = 6; // Don't exceed 6 total
    }
    return {
        itemsPerSymbol,
        targetNewsCount
    };
};
const validateArticle = (article)=>article.headline && article.summary && article.url && article.datetime;
const getTodayString = ()=>new Date().toISOString().split('T')[0];
const formatArticle = (article, isCompanyNews, symbol, index = 0)=>({
        id: isCompanyNews ? Date.now() + Math.random() : article.id + index,
        headline: article.headline.trim(),
        summary: article.summary.trim().substring(0, isCompanyNews ? 200 : 150) + '...',
        source: article.source || (isCompanyNews ? 'Company News' : 'Market News'),
        url: article.url,
        datetime: article.datetime,
        image: article.image || '',
        category: isCompanyNews ? 'company' : article.category || 'general',
        related: isCompanyNews ? symbol : article.related || ''
    });
const formatChangePercent = (changePercent)=>{
    if (!changePercent) return '';
    const sign = changePercent > 0 ? '+' : '';
    return `${sign}${changePercent.toFixed(2)}%`;
};
const getChangeColorClass = (changePercent)=>{
    if (!changePercent) return 'text-gray-400';
    return changePercent > 0 ? 'text-green-500' : 'text-red-500';
};
const formatPrice = (price)=>{
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    }).format(price);
};
const formatDateToday = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC'
});
const getAlertText = (alert)=>{
    const condition = alert.alertType === 'upper' ? '>' : '<';
    return `Price ${condition} ${formatPrice(alert.threshold)}`;
};
const getFormattedTodayDate = ()=>new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC'
    });
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-lg leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/command.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Command",
    ()=>Command,
    "CommandDialog",
    ()=>CommandDialog,
    "CommandEmpty",
    ()=>CommandEmpty,
    "CommandGroup",
    ()=>CommandGroup,
    "CommandInput",
    ()=>CommandInput,
    "CommandItem",
    ()=>CommandItem,
    "CommandList",
    ()=>CommandList,
    "CommandSeparator",
    ()=>CommandSeparator,
    "CommandShortcut",
    ()=>CommandShortcut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cmdk/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as SearchIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function Command({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"], {
        "data-slot": "command",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/command.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c = Command;
function CommandDialog({ title = "Command Palette", description = "Search for a command to run...", children, className, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                className: "sr-only",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/ui/command.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/components/ui/command.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/command.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("overflow-hidden p-0", className),
                showCloseButton: showCloseButton,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Command, {
                    className: "[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/ui/command.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/command.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/command.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_c1 = CommandDialog;
function CommandInput({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "command-input-wrapper",
        className: "flex h-9 items-center gap-2 border-b px-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SearchIcon$3e$__["SearchIcon"], {
                className: "size-4 shrink-0 opacity-50"
            }, void 0, false, {
                fileName: "[project]/components/ui/command.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].Input, {
                "data-slot": "command-input",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50", className),
                ...props
            }, void 0, false, {
                fileName: "[project]/components/ui/command.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/command.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
_c2 = CommandInput;
function CommandList({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].List, {
        "data-slot": "command-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/command.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
_c3 = CommandList;
function CommandEmpty({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].Empty, {
        "data-slot": "command-empty",
        className: "py-6 text-center text-sm",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/command.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_c4 = CommandEmpty;
function CommandGroup({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].Group, {
        "data-slot": "command-group",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/command.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
_c5 = CommandGroup;
function CommandSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].Separator, {
        "data-slot": "command-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border -mx-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/command.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
_c6 = CommandSeparator;
function CommandItem({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cmdk$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Command"].Item, {
        "data-slot": "command-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/command.tsx",
        lineNumber: 147,
        columnNumber: 5
    }, this);
}
_c7 = CommandItem;
function CommandShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "command-shortcut",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground ml-auto text-xs tracking-widest", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/command.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
}
_c8 = CommandShortcut;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "Command");
__turbopack_context__.k.register(_c1, "CommandDialog");
__turbopack_context__.k.register(_c2, "CommandInput");
__turbopack_context__.k.register(_c3, "CommandList");
__turbopack_context__.k.register(_c4, "CommandEmpty");
__turbopack_context__.k.register(_c5, "CommandGroup");
__turbopack_context__.k.register(_c6, "CommandSeparator");
__turbopack_context__.k.register(_c7, "CommandItem");
__turbopack_context__.k.register(_c8, "CommandShortcut");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/actions/data:bd0b6f [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7fe0f8c519a26076201b983e564a14600f225ffe2b":"searchStocks"},"lib/actions/finnhub.actions.ts",""] */ __turbopack_context__.s([
    "searchStocks",
    ()=>searchStocks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var searchStocks = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7fe0f8c519a26076201b983e564a14600f225ffe2b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "searchStocks"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZmlubmh1Yi5hY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHNlcnZlclwiO1xuXG5pbXBvcnQgeyBnZXREYXRlUmFuZ2UsIHZhbGlkYXRlQXJ0aWNsZSwgZm9ybWF0QXJ0aWNsZSB9IGZyb20gJ0AvbGliL3V0aWxzJztcbmltcG9ydCB7IFBPUFVMQVJfU1RPQ0tfU1lNQk9MUyB9IGZyb20gJ0AvbGliL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBjYWNoZSB9IGZyb20gJ3JlYWN0JztcblxuXG5jb25zdCBGSU5OSFVCX0JBU0VfVVJMID0gXCJodHRwczovL2Zpbm5odWIuaW8vYXBpL3YxXCI7XG5jb25zdCBGSU5OSFVCX0FQSV9LRVkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSU5OSFVCX0FQSV9LRVk7XG5cbi8qKlxuICogR2VuZXJpYyBmZXRjaCBmdW5jdGlvbiB3aXRoIGNhY2hpbmcgb3B0aW9uc1xuICogQHBhcmFtIHVybCAtIEZ1bGwgVVJMIHRvIGZldGNoXG4gKiBAcGFyYW0gcmV2YWxpZGF0ZVNlY29uZHMgLSBPcHRpb25hbCBjYWNoZSByZXZhbGlkYXRpb24gdGltZSBpbiBzZWNvbmRzXG4gKiBAcmV0dXJucyBQYXJzZWQgSlNPTiByZXNwb25zZVxuICovXG5hc3luYyBmdW5jdGlvbiBmZXRjaEpTT048VD4odXJsOiBzdHJpbmcsIHJldmFsaWRhdGVTZWNvbmRzPzogbnVtYmVyKTogUHJvbWlzZTxUPiB7XG4gICAgY29uc3Qgb3B0aW9uczogUmVxdWVzdEluaXQgPSByZXZhbGlkYXRlU2Vjb25kc1xuICAgICAgICA/IHsgY2FjaGU6ICdmb3JjZS1jYWNoZScsIG5leHQ6IHsgcmV2YWxpZGF0ZTogcmV2YWxpZGF0ZVNlY29uZHMgfSB9XG4gICAgICAgIDogeyBjYWNoZTogJ25vLXN0b3JlJyB9O1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIG9wdGlvbnMpO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn1cblxuLyoqXG4gKiBHZXQgbmV3cyBhcnRpY2xlcyBmb3IgZ2l2ZW4gc3ltYm9scyBvciBnZW5lcmFsIG1hcmtldCBuZXdzXG4gKiBAcGFyYW0gc3ltYm9scyAtIE9wdGlvbmFsIGFycmF5IG9mIHN0b2NrIHN5bWJvbHMgdG8gZmV0Y2ggbmV3cyBmb3JcbiAqIEByZXR1cm5zIEFycmF5IG9mIGZvcm1hdHRlZCBuZXdzIGFydGljbGVzIChtYXggNilcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE5ld3Moc3ltYm9scz86IHN0cmluZ1tdKTogUHJvbWlzZTxNYXJrZXROZXdzQXJ0aWNsZVtdPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKCFGSU5OSFVCX0FQSV9LRVkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmlubmh1YiBBUEkga2V5IGlzIG5vdCBjb25maWd1cmVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDb21wdXRlIGRhdGUgcmFuZ2UgZm9yIGxhc3QgNSBkYXlzXG4gICAgICAgIGNvbnN0IHsgZnJvbSwgdG8gfSA9IGdldERhdGVSYW5nZSg1KTtcblxuICAgICAgICAvLyBJZiBzeW1ib2xzIGFyZSBwcm92aWRlZCwgZmV0Y2ggY29tcGFueSBuZXdzXG4gICAgICAgIGlmIChzeW1ib2xzICYmIHN5bWJvbHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8gQ2xlYW4gYW5kIHVwcGVyY2FzZSBzeW1ib2xzXG4gICAgICAgICAgICBjb25zdCBjbGVhblN5bWJvbHMgPSBzeW1ib2xzXG4gICAgICAgICAgICAgICAgLm1hcChzID0+IHMudHJpbSgpLnRvVXBwZXJDYXNlKCkpXG4gICAgICAgICAgICAgICAgLmZpbHRlcihzID0+IHMubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICAuc2xpY2UoMCwgMTApOyAvLyBMaW1pdCB0byAxMCBzeW1ib2xzIG1heFxuXG4gICAgICAgICAgICBpZiAoY2xlYW5TeW1ib2xzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIEZhbGxiYWNrIHRvIGdlbmVyYWwgbmV3cyBpZiBubyB2YWxpZCBzeW1ib2xzXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZldGNoR2VuZXJhbE5ld3MoZnJvbSwgdG8pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBhcnRpY2xlczogTWFya2V0TmV3c0FydGljbGVbXSA9IFtdO1xuICAgICAgICAgICAgY29uc3QgbWF4Um91bmRzID0gNjtcbiAgICAgICAgICAgIGxldCByb3VuZEluZGV4ID0gMDtcblxuICAgICAgICAgICAgLy8gUm91bmQtcm9iaW4gdGhyb3VnaCBzeW1ib2xzLCBtYXggNiBpdGVyYXRpb25zXG4gICAgICAgICAgICB3aGlsZSAoYXJ0aWNsZXMubGVuZ3RoIDwgNiAmJiByb3VuZEluZGV4IDwgbWF4Um91bmRzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBzeW1ib2wgb2YgY2xlYW5TeW1ib2xzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcnRpY2xlcy5sZW5ndGggPj0gNikgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IGAke0ZJTk5IVUJfQkFTRV9VUkx9L2NvbXBhbnktbmV3cz9zeW1ib2w9JHtzeW1ib2x9JmZyb209JHtmcm9tfSZ0bz0ke3RvfSZ0b2tlbj0ke0ZJTk5IVUJfQVBJX0tFWX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3c0RhdGEgPSBhd2FpdCBmZXRjaEpTT048UmF3TmV3c0FydGljbGVbXT4odXJsKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmluZCBmaXJzdCB2YWxpZCBhcnRpY2xlIG5vdCBhbHJlYWR5IGNvbGxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsaWRBcnRpY2xlID0gbmV3c0RhdGEuZmluZCgoYXJ0aWNsZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWRhdGVBcnRpY2xlKGFydGljbGUpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgd2UgYWxyZWFkeSBoYXZlIHRoaXMgYXJ0aWNsZSAoYnkgVVJMKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhYXJ0aWNsZXMuc29tZShhID0+IGEudXJsID09PSBhcnRpY2xlLnVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkQXJ0aWNsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZCA9IGZvcm1hdEFydGljbGUodmFsaWRBcnRpY2xlLCB0cnVlLCBzeW1ib2wsIGFydGljbGVzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZXMucHVzaChmb3JtYXR0ZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgZmV0Y2hpbmcgbmV3cyBmb3IgJHtzeW1ib2x9OmAsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbnRpbnVlIHRvIG5leHQgc3ltYm9sXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcm91bmRJbmRleCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTb3J0IGJ5IGRhdGV0aW1lIChuZXdlc3QgZmlyc3QpIGFuZCByZXR1cm5cbiAgICAgICAgICAgIGFydGljbGVzLnNvcnQoKGEsIGIpID0+IGIuZGF0ZXRpbWUgLSBhLmRhdGV0aW1lKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gSWYgd2UgZ290IGFydGljbGVzLCByZXR1cm4gdGhlbVxuICAgICAgICAgICAgaWYgKGFydGljbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJ0aWNsZXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEZhbGxiYWNrIHRvIGdlbmVyYWwgbmV3cyBpZiBubyBjb21wYW55IG5ld3MgZm91bmRcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBjb21wYW55IG5ld3MgZm91bmQsIGZhbGxpbmcgYmFjayB0byBnZW5lcmFsIG5ld3MnKTtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaEdlbmVyYWxOZXdzKGZyb20sIHRvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5vIHN5bWJvbHMgcHJvdmlkZWQsIGZldGNoIGdlbmVyYWwgbWFya2V0IG5ld3NcbiAgICAgICAgcmV0dXJuIGZldGNoR2VuZXJhbE5ld3MoZnJvbSwgdG8pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGdldE5ld3M6JywgZXJyb3IpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBuZXdzJyk7XG4gICAgfVxufVxuXG4vKipcbiAqIEZldGNoIGdlbmVyYWwgbWFya2V0IG5ld3NcbiAqIEBwYXJhbSBmcm9tIC0gU3RhcnQgZGF0ZSAoWVlZWS1NTS1ERClcbiAqIEBwYXJhbSB0byAtIEVuZCBkYXRlIChZWVlZLU1NLUREKVxuICogQHJldHVybnMgQXJyYXkgb2YgZm9ybWF0dGVkIG5ld3MgYXJ0aWNsZXMgKG1heCA2KVxuICovXG5hc3luYyBmdW5jdGlvbiBmZXRjaEdlbmVyYWxOZXdzKGZyb206IHN0cmluZywgdG86IHN0cmluZyk6IFByb21pc2U8TWFya2V0TmV3c0FydGljbGVbXT4ge1xuICAgIGlmICghRklOTkhVQl9BUElfS0VZKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmlubmh1YiBBUEkga2V5IGlzIG5vdCBjb25maWd1cmVkJyk7XG4gICAgfVxuXG4gICAgY29uc3QgdXJsID0gYCR7RklOTkhVQl9CQVNFX1VSTH0vbmV3cz9jYXRlZ29yeT1nZW5lcmFsJnRva2VuPSR7RklOTkhVQl9BUElfS0VZfWA7XG4gICAgY29uc3QgbmV3c0RhdGEgPSBhd2FpdCBmZXRjaEpTT048UmF3TmV3c0FydGljbGVbXT4odXJsKTtcblxuICAgIC8vIEZpbHRlciBhbmQgdmFsaWRhdGUgYXJ0aWNsZXNcbiAgICBjb25zdCB2YWxpZEFydGljbGVzID0gbmV3c0RhdGEuZmlsdGVyKHZhbGlkYXRlQXJ0aWNsZSk7XG5cbiAgICAvLyBEZWR1cGxpY2F0ZSBieSBpZCwgdXJsLCBhbmQgaGVhZGxpbmVcbiAgICBjb25zdCBzZWVuSWRzID0gbmV3IFNldDxudW1iZXI+KCk7XG4gICAgY29uc3Qgc2VlblVybHMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBjb25zdCBzZWVuSGVhZGxpbmVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgXG4gICAgY29uc3QgdW5pcXVlQXJ0aWNsZXMgPSB2YWxpZEFydGljbGVzLmZpbHRlcigoYXJ0aWNsZSkgPT4ge1xuICAgICAgICBjb25zdCBpc0R1cGxpY2F0ZSA9IFxuICAgICAgICAgICAgc2Vlbklkcy5oYXMoYXJ0aWNsZS5pZCkgfHwgXG4gICAgICAgICAgICBzZWVuVXJscy5oYXMoYXJ0aWNsZS51cmwhKSB8fCBcbiAgICAgICAgICAgIHNlZW5IZWFkbGluZXMuaGFzKGFydGljbGUuaGVhZGxpbmUhKTtcblxuICAgICAgICBpZiAoIWlzRHVwbGljYXRlKSB7XG4gICAgICAgICAgICBzZWVuSWRzLmFkZChhcnRpY2xlLmlkKTtcbiAgICAgICAgICAgIHNlZW5VcmxzLmFkZChhcnRpY2xlLnVybCEpO1xuICAgICAgICAgICAgc2VlbkhlYWRsaW5lcy5hZGQoYXJ0aWNsZS5oZWFkbGluZSEpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgLy8gVGFrZSB0b3AgNiwgZm9ybWF0IHRoZW1cbiAgICBjb25zdCB0b3BBcnRpY2xlcyA9IHVuaXF1ZUFydGljbGVzLnNsaWNlKDAsIDYpO1xuICAgIFxuICAgIHJldHVybiB0b3BBcnRpY2xlcy5tYXAoKGFydGljbGUsIGluZGV4KSA9PiBcbiAgICAgICAgZm9ybWF0QXJ0aWNsZShhcnRpY2xlLCBmYWxzZSwgdW5kZWZpbmVkLCBpbmRleClcbiAgICApO1xufVxuXG5leHBvcnQgY29uc3Qgc2VhcmNoU3RvY2tzID0gY2FjaGUoYXN5bmMgKHF1ZXJ5Pzogc3RyaW5nKTogUHJvbWlzZTxTdG9ja1dpdGhXYXRjaGxpc3RTdGF0dXNbXT4gPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHRva2VuID0gcHJvY2Vzcy5lbnYuRklOTkhVQl9BUElfS0VZID8/IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJTk5IVUJfQVBJX0tFWTtcbiAgICBpZiAoIXRva2VuKSB7XG4gICAgICAvLyBJZiBubyB0b2tlbiwgbG9nIGFuZCByZXR1cm4gZW1wdHkgdG8gYXZvaWQgdGhyb3dpbmcgcGVyIHJlcXVpcmVtZW50c1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gc3RvY2sgc2VhcmNoOicsIG5ldyBFcnJvcignRklOTkhVQiBBUEkga2V5IGlzIG5vdCBjb25maWd1cmVkJykpO1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IHRyaW1tZWQgPSB0eXBlb2YgcXVlcnkgPT09ICdzdHJpbmcnID8gcXVlcnkudHJpbSgpIDogJyc7XG5cbiAgICBsZXQgcmVzdWx0czogRmlubmh1YlNlYXJjaFJlc3VsdFtdID0gW107XG4gICAgY29uc3QgcHJvZmlsZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCBGaW5uaHViU3RvY2tQcm9maWxlIHwgbnVsbD4oKTtcblxuICAgIGlmICghdHJpbW1lZCkge1xuICAgICAgY29uc3QgdG9wID0gUE9QVUxBUl9TVE9DS19TWU1CT0xTLnNsaWNlKDAsIDEwKTtcbiAgICAgIGNvbnN0IGVucmljaGVkID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgICAgIHRvcC5tYXAoYXN5bmMgKHN5bSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHVwcGVyY2FzZVN5bWJvbCA9IHN5bS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgIGNvbnN0IHByb2ZpbGUgPSBhd2FpdCBnZXRTdG9ja1Byb2ZpbGUodXBwZXJjYXNlU3ltYm9sKTtcbiAgICAgICAgICBwcm9maWxlTWFwLnNldCh1cHBlcmNhc2VTeW1ib2wsIHByb2ZpbGUpO1xuXG4gICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBwcm9maWxlPy5uYW1lID8/IHByb2ZpbGU/LnRpY2tlciA/PyB1cHBlcmNhc2VTeW1ib2w7XG5cbiAgICAgICAgICBjb25zdCBlbnRyeTogRmlubmh1YlNlYXJjaFJlc3VsdCA9IHtcbiAgICAgICAgICAgIHN5bWJvbDogdXBwZXJjYXNlU3ltYm9sLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBkaXNwbGF5U3ltYm9sOiB1cHBlcmNhc2VTeW1ib2wsXG4gICAgICAgICAgICB0eXBlOiAnQ29tbW9uIFN0b2NrJyxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgICAgcmVzdWx0cyA9IGVucmljaGVkLmZpbHRlcigoZW50cnkpID0+IEJvb2xlYW4oZW50cnk/LnN5bWJvbCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB1cmwgPSBgJHtGSU5OSFVCX0JBU0VfVVJMfS9zZWFyY2g/cT0ke2VuY29kZVVSSUNvbXBvbmVudCh0cmltbWVkKX0mdG9rZW49JHt0b2tlbn1gO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoSlNPTjxGaW5uaHViU2VhcmNoUmVzcG9uc2U+KHVybCwgMTgwMCk7XG4gICAgICByZXN1bHRzID0gQXJyYXkuaXNBcnJheShkYXRhPy5yZXN1bHQpID8gZGF0YS5yZXN1bHQuc2xpY2UoMCwgMTUpIDogW107XG5cbiAgICAgIGNvbnN0IHVuaXF1ZVN5bWJvbHMgPSBBcnJheS5mcm9tKFxuICAgICAgICBuZXcgU2V0KFxuICAgICAgICAgIHJlc3VsdHNcbiAgICAgICAgICAgIC5tYXAoKHIpID0+IChyLnN5bWJvbCB8fCAnJykudHJpbSgpLnRvVXBwZXJDYXNlKCkpXG4gICAgICAgICAgICAuZmlsdGVyKChzeW0pID0+IHN5bS5sZW5ndGggPiAwKVxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChcbiAgICAgICAgdW5pcXVlU3ltYm9scy5tYXAoYXN5bmMgKHN5bSkgPT4ge1xuICAgICAgICAgIGlmIChwcm9maWxlTWFwLmhhcyhzeW0pKSByZXR1cm47XG4gICAgICAgICAgY29uc3QgcHJvZmlsZSA9IGF3YWl0IGdldFN0b2NrUHJvZmlsZShzeW0pO1xuICAgICAgICAgIHByb2ZpbGVNYXAuc2V0KHN5bSwgcHJvZmlsZSk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm1hdEV4Y2hhbmdlID0gKHZhbHVlPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoIXZhbHVlKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuIHZhbHVlLnRyaW0oKS50b1VwcGVyQ2FzZSgpO1xuICAgIH07XG5cbiAgICBjb25zdCBpbmZlckV4Y2hhbmdlRnJvbVN5bWJvbCA9ICh2YWx1ZT86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIGNvbnN0IGNhbmRpZGF0ZSA9IHZhbHVlLnRyaW0oKS50b1VwcGVyQ2FzZSgpO1xuICAgICAgaWYgKCFjYW5kaWRhdGUpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICBpZiAoY2FuZGlkYXRlLmluY2x1ZGVzKCc6JykpIHtcbiAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZS5zcGxpdCgnOicpWzBdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuXG4gICAgY29uc3QgbWFwcGVkOiBTdG9ja1dpdGhXYXRjaGxpc3RTdGF0dXNbXSA9IHJlc3VsdHNcbiAgICAgIC5tYXAoKHIpID0+IHtcbiAgICAgICAgY29uc3QgdXBwZXIgPSAoci5zeW1ib2wgfHwgJycpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIGlmICghdXBwZXIpIHJldHVybiBudWxsO1xuXG4gICAgICAgIGNvbnN0IHByb2ZpbGUgPSBwcm9maWxlTWFwLmdldCh1cHBlcikgPz8gbnVsbDtcblxuICAgICAgICBjb25zdCBleGNoYW5nZSA9XG4gICAgICAgICAgZm9ybWF0RXhjaGFuZ2UocHJvZmlsZT8uZXhjaGFuZ2UpID8/XG4gICAgICAgICAgaW5mZXJFeGNoYW5nZUZyb21TeW1ib2woci5kaXNwbGF5U3ltYm9sKSA/P1xuICAgICAgICAgIGluZmVyRXhjaGFuZ2VGcm9tU3ltYm9sKHIuc3ltYm9sKSA/P1xuICAgICAgICAgICdVUyc7XG5cbiAgICAgICAgY29uc3QgbmFtZSA9IHIuZGVzY3JpcHRpb24/LnRyaW0oKSB8fCBwcm9maWxlPy5uYW1lIHx8IHVwcGVyO1xuICAgICAgICBjb25zdCB0eXBlID0gci50eXBlPy50cmltKCkgfHwgJ1N0b2NrJztcblxuICAgICAgICBjb25zdCBpdGVtOiBTdG9ja1dpdGhXYXRjaGxpc3RTdGF0dXMgPSB7XG4gICAgICAgICAgc3ltYm9sOiB1cHBlcixcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIGV4Y2hhbmdlLFxuICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgaXNJbldhdGNobGlzdDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoKGl0ZW0pOiBpdGVtIGlzIFN0b2NrV2l0aFdhdGNobGlzdFN0YXR1cyA9PiBCb29sZWFuKGl0ZW0pKVxuICAgICAgLnNsaWNlKDAsIDE1KTtcblxuICAgIHJldHVybiBtYXBwZWQ7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIHN0b2NrIHNlYXJjaDonLCBlcnIpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufSk7XG5cblxuaW50ZXJmYWNlIEZpbm5odWJRdW90ZSB7XG4gICAgYzogbnVtYmVyOyAgLy8gQ3VycmVudCBwcmljZVxuICAgIGQ6IG51bWJlcjsgIC8vIENoYW5nZVxuICAgIGRwOiBudW1iZXI7IC8vIFBlcmNlbnQgY2hhbmdlXG4gICAgaDogbnVtYmVyOyAgLy8gSGlnaFxuICAgIGw6IG51bWJlcjsgIC8vIExvd1xuICAgIG86IG51bWJlcjsgIC8vIE9wZW5cbiAgICBwYzogbnVtYmVyOyAvLyBQcmV2aW91cyBjbG9zZVxufVxuXG5pbnRlcmZhY2UgRmlubmh1Yk1ldHJpY3Mge1xuICAgIG1ldHJpYzoge1xuICAgICAgICBwZUJhc2ljRXhjbEV4dHJhVFRNPzogbnVtYmVyO1xuICAgICAgICBba2V5OiBzdHJpbmddOiBhbnk7XG4gICAgfTtcbn1cblxuZXhwb3J0IHR5cGUgRmlubmh1YlN0b2NrUHJvZmlsZSA9IHtcbiAgICBjb3VudHJ5Pzogc3RyaW5nO1xuICAgIGN1cnJlbmN5Pzogc3RyaW5nO1xuICAgIGV4Y2hhbmdlPzogc3RyaW5nO1xuICAgIGlwbz86IHN0cmluZztcbiAgICBsb2dvPzogc3RyaW5nO1xuICAgIG1hcmtldENhcGl0YWxpemF0aW9uPzogbnVtYmVyO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgcGhvbmU/OiBzdHJpbmc7XG4gICAgc2hhcmVPdXRzdGFuZGluZz86IG51bWJlcjtcbiAgICB0aWNrZXI/OiBzdHJpbmc7XG4gICAgd2VidXJsPzogc3RyaW5nO1xuICAgIHByaWNlPzogbnVtYmVyO1xuICAgIGNoYW5nZT86IG51bWJlcjtcbiAgICBjaGFuZ2VQZXJjZW50PzogbnVtYmVyO1xuICAgIHBlUmF0aW8/OiBudW1iZXI7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RvY2tQcm9maWxlID0gY2FjaGUoYXN5bmMgKHN5bWJvbDogc3RyaW5nKTogUHJvbWlzZTxGaW5uaHViU3RvY2tQcm9maWxlIHwgbnVsbD4gPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gcHJvY2Vzcy5lbnYuRklOTkhVQl9BUElfS0VZID8/IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJTk5IVUJfQVBJX0tFWTtcbiAgICAgICAgaWYgKCF0b2tlbikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgc3RvY2sgcHJvZmlsZTonLCBuZXcgRXJyb3IoJ0ZJTk5IVUIgQVBJIGtleSBpcyBub3QgY29uZmlndXJlZCcpKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdHJpbW1lZCA9IHR5cGVvZiBzeW1ib2wgPT09ICdzdHJpbmcnID8gc3ltYm9sLnRyaW0oKS50b1VwcGVyQ2FzZSgpIDogJyc7XG4gICAgICAgIGlmICghdHJpbW1lZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcm9maWxlVXJsID0gYCR7RklOTkhVQl9CQVNFX1VSTH0vc3RvY2svcHJvZmlsZTI/c3ltYm9sPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHRyaW1tZWQpfSZ0b2tlbj0ke3Rva2VufWA7XG4gICAgICAgIGNvbnN0IHF1b3RlVXJsID0gYCR7RklOTkhVQl9CQVNFX1VSTH0vcXVvdGU/c3ltYm9sPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHRyaW1tZWQpfSZ0b2tlbj0ke3Rva2VufWA7XG4gICAgICAgIGNvbnN0IG1ldHJpY3NVcmwgPSBgJHtGSU5OSFVCX0JBU0VfVVJMfS9zdG9jay9tZXRyaWM/c3ltYm9sPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHRyaW1tZWQpfSZtZXRyaWM9YWxsJnRva2VuPSR7dG9rZW59YDtcblxuICAgICAgICBjb25zdCBbcHJvZmlsZVJlc3VsdCwgcXVvdGVSZXN1bHQsIG1ldHJpY3NSZXN1bHRdID0gYXdhaXQgUHJvbWlzZS5hbGxTZXR0bGVkKFtcbiAgICAgICAgICAgIGZldGNoSlNPTjxGaW5uaHViU3RvY2tQcm9maWxlPihwcm9maWxlVXJsLCAxODAwKSxcbiAgICAgICAgICAgIGZldGNoSlNPTjxGaW5uaHViUXVvdGU+KHF1b3RlVXJsLCA2MCksIC8vIENhY2hlIHF1b3RlIGZvciA2MHNcbiAgICAgICAgICAgIGZldGNoSlNPTjxGaW5uaHViTWV0cmljcz4obWV0cmljc1VybCwgMTgwMClcbiAgICAgICAgXSk7XG5cbiAgICAgICAgbGV0IHByb2ZpbGUgPSBwcm9maWxlUmVzdWx0LnN0YXR1cyA9PT0gJ2Z1bGZpbGxlZCcgPyBwcm9maWxlUmVzdWx0LnZhbHVlIDogbnVsbDtcblxuICAgICAgICBpZiAoIXByb2ZpbGUgJiYgKHF1b3RlUmVzdWx0LnN0YXR1cyA9PT0gJ2Z1bGZpbGxlZCcgfHwgbWV0cmljc1Jlc3VsdC5zdGF0dXMgPT09ICdmdWxmaWxsZWQnKSkge1xuICAgICAgICAgICAgIC8vIElmIHByb2ZpbGUgZmFpbGVkIGJ1dCBvdGhlcnMgc3VjY2VlZGVkLCBjcmVhdGUgYSBwYXJ0aWFsIHByb2ZpbGVcbiAgICAgICAgICAgICBwcm9maWxlID0geyB0aWNrZXI6IHRyaW1tZWQgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghcHJvZmlsZSkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgaWYgKHF1b3RlUmVzdWx0LnN0YXR1cyA9PT0gJ2Z1bGZpbGxlZCcpIHtcbiAgICAgICAgICAgIHByb2ZpbGUucHJpY2UgPSBxdW90ZVJlc3VsdC52YWx1ZS5jO1xuICAgICAgICAgICAgcHJvZmlsZS5jaGFuZ2UgPSBxdW90ZVJlc3VsdC52YWx1ZS5kO1xuICAgICAgICAgICAgcHJvZmlsZS5jaGFuZ2VQZXJjZW50ID0gcXVvdGVSZXN1bHQudmFsdWUuZHA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWV0cmljc1Jlc3VsdC5zdGF0dXMgPT09ICdmdWxmaWxsZWQnKSB7XG4gICAgICAgICAgICBwcm9maWxlLnBlUmF0aW8gPSBtZXRyaWNzUmVzdWx0LnZhbHVlLm1ldHJpYz8ucGVCYXNpY0V4Y2xFeHRyYVRUTTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcm9maWxlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGZldGNoaW5nIHN0b2NrIHByb2ZpbGUgZm9yICR7c3ltYm9sfTpgLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJvU0EySmEifQ==
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useDebounce.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDebounce",
    ()=>useDebounce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useDebounce(callback, delay) {
    _s();
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDebounce.useCallback": ()=>{
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout({
                "useDebounce.useCallback": ()=>{
                    callback();
                }
            }["useDebounce.useCallback"], delay);
        }
    }["useDebounce.useCallback"], [
        callback,
        delay
    ]);
}
_s(useDebounce, "aX3H9w8I659ydesPwuJ+mASHjvQ=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/watchlist/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addToWatchlist",
    ()=>addToWatchlist,
    "getAllWatchlistSymbols",
    ()=>getAllWatchlistSymbols,
    "getWatchlistStatus",
    ()=>getWatchlistStatus,
    "removeFromWatchlist",
    ()=>removeFromWatchlist
]);
"use client";
const WATCHLIST_ENDPOINT = '/api/watchlist';
const parseResponse = async (response)=>{
    try {
        return await response.json();
    } catch  {
        return {};
    }
};
const handleResponse = async (response)=>{
    const body = await parseResponse(response);
    if (!response.ok) {
        throw new Error(body?.message || 'Watchlist request failed');
    }
    return body;
};
const addToWatchlist = async (symbol, company)=>{
    const payload = {
        symbol,
        company
    };
    const response = await fetch(WATCHLIST_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    return handleResponse(response);
};
const removeFromWatchlist = async (symbol)=>{
    const payload = {
        symbol
    };
    const response = await fetch(WATCHLIST_ENDPOINT, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    return handleResponse(response);
};
const getWatchlistStatus = async (symbol)=>{
    const url = `${WATCHLIST_ENDPOINT}?${new URLSearchParams({
        symbol
    }).toString()}`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const body = await parseResponse(response);
    if (!response.ok) {
        throw new Error(body?.message || 'Failed to fetch watchlist status');
    }
    return {
        isInWatchlist: Boolean(body?.isInWatchlist)
    };
};
const getAllWatchlistSymbols = async ()=>{
    const response = await fetch(WATCHLIST_ENDPOINT, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const body = await parseResponse(response);
    if (!response.ok) {
        throw new Error(body?.message || 'Failed to fetch watchlist');
    }
    return body?.symbols || [];
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/SearchCommand.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchCommand
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/command.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$bd0b6f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/actions/data:bd0b6f [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useDebounce.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$watchlist$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/watchlist/client.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
const normalizeSymbol = (value)=>value?.trim().toUpperCase() || '';
const buildLookup = (stocks = [])=>{
    const lookup = {};
    stocks.forEach((stock)=>{
        if (stock.isInWatchlist) {
            lookup[normalizeSymbol(stock.symbol)] = true;
        }
    });
    return lookup;
};
const formatStocks = (stocks = [], lookup = {})=>stocks.map((stock)=>{
        const symbol = normalizeSymbol(stock.symbol);
        return {
            ...stock,
            symbol,
            isInWatchlist: lookup[symbol] ?? !!stock.isInWatchlist
        };
    });
function SearchCommand({ renderAs = 'button', label = 'Add stock', initialStocks }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const initialLookup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SearchCommand.useMemo[initialLookup]": ()=>buildLookup(initialStocks)
    }["SearchCommand.useMemo[initialLookup]"], [
        initialStocks
    ]);
    const [watchlistLookup, setWatchlistLookup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialLookup);
    const [pendingSymbol, setPendingSymbol] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [stocks, setStocks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "SearchCommand.useState": ()=>formatStocks(initialStocks, initialLookup)
    }["SearchCommand.useState"]);
    const mapStocksWithWatchlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SearchCommand.useCallback[mapStocksWithWatchlist]": (items = [])=>items.map({
                "SearchCommand.useCallback[mapStocksWithWatchlist]": (item)=>{
                    const symbol = normalizeSymbol(item.symbol);
                    return {
                        ...item,
                        symbol,
                        isInWatchlist: watchlistLookup[symbol] ?? !!item.isInWatchlist
                    };
                }
            }["SearchCommand.useCallback[mapStocksWithWatchlist]"])
    }["SearchCommand.useCallback[mapStocksWithWatchlist]"], [
        watchlistLookup
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchCommand.useEffect": ()=>{
            setWatchlistLookup(initialLookup);
            setStocks(formatStocks(initialStocks, initialLookup));
        }
    }["SearchCommand.useEffect"], [
        initialLookup,
        initialStocks
    ]);
    const isSearchMode = !!searchTerm.trim();
    const displayStocks = isSearchMode ? stocks : stocks?.slice(0, 10);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchCommand.useEffect": ()=>{
            const down = {
                "SearchCommand.useEffect.down": (e)=>{
                    if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                        e.preventDefault();
                        setOpen({
                            "SearchCommand.useEffect.down": (prevOpen)=>!prevOpen
                        }["SearchCommand.useEffect.down"]);
                    }
                }
            }["SearchCommand.useEffect.down"];
            document.addEventListener('keydown', down);
            return ({
                "SearchCommand.useEffect": ()=>document.removeEventListener('keydown', down)
            })["SearchCommand.useEffect"];
        }
    }["SearchCommand.useEffect"], []);
    // Refresh watchlist status when dialog opens
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchCommand.useEffect": ()=>{
            if (!open) return;
            const refreshWatchlistStatus = {
                "SearchCommand.useEffect.refreshWatchlistStatus": async ()=>{
                    try {
                        const symbols = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$watchlist$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllWatchlistSymbols"])();
                        const newLookup = {};
                        symbols.forEach({
                            "SearchCommand.useEffect.refreshWatchlistStatus": (symbol)=>{
                                newLookup[normalizeSymbol(symbol)] = true;
                            }
                        }["SearchCommand.useEffect.refreshWatchlistStatus"]);
                        setWatchlistLookup(newLookup);
                        // Update the displayed stocks with fresh watchlist status
                        setStocks({
                            "SearchCommand.useEffect.refreshWatchlistStatus": (prev)=>prev.map({
                                    "SearchCommand.useEffect.refreshWatchlistStatus": (stock)=>({
                                            ...stock,
                                            isInWatchlist: newLookup[normalizeSymbol(stock.symbol)] ?? false
                                        })
                                }["SearchCommand.useEffect.refreshWatchlistStatus"])
                        }["SearchCommand.useEffect.refreshWatchlistStatus"]);
                    } catch (error) {
                        console.error('Failed to refresh watchlist status:', error);
                    // Silently fail - we'll just use the existing state
                    }
                }
            }["SearchCommand.useEffect.refreshWatchlistStatus"];
            refreshWatchlistStatus();
        }
    }["SearchCommand.useEffect"], [
        open
    ]);
    const handleSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SearchCommand.useCallback[handleSearch]": async ()=>{
            if (!isSearchMode) {
                setStocks(mapStocksWithWatchlist(initialStocks));
                return;
            }
            setLoading(true);
            try {
                const results = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$bd0b6f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["searchStocks"])(searchTerm.trim());
                setStocks(mapStocksWithWatchlist(results));
            } catch  {
                setStocks([]);
            } finally{
                setLoading(false);
            }
        }
    }["SearchCommand.useCallback[handleSearch]"], [
        initialStocks,
        isSearchMode,
        mapStocksWithWatchlist,
        searchTerm
    ]);
    const debouncedSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"])(handleSearch, 300);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchCommand.useEffect": ()=>{
            debouncedSearch();
        }
    }["SearchCommand.useEffect"], [
        debouncedSearch,
        searchTerm
    ]);
    const handleSelectStock = ()=>{
        setOpen(false);
        setSearchTerm('');
        setStocks(mapStocksWithWatchlist(initialStocks));
    };
    /*
    * This function is used to toggle the watchlist status of a stock.
    * It is used to add a stock to the watchlist and remove a stock from the watchlist.
    * It is used to update the watchlist lookup and the stocks list.
    * It is used to show a success or error toast message.
    * It is used to set the pending symbol to the symbol of the stock that is being toggled.
    * It is used to set the pending symbol to null when the toggle is complete.
    */ const handleToggleWatchlist = async (event, stock)=>{
        event.preventDefault();
        event.stopPropagation();
        const symbol = normalizeSymbol(stock.symbol);
        if (pendingSymbol) return;
        setPendingSymbol(symbol);
        try {
            const { isInWatchlist: currentlyInWatchlist } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$watchlist$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWatchlistStatus"])(symbol);
            if (currentlyInWatchlist) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$watchlist$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeFromWatchlist"])(symbol);
            } else {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$watchlist$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addToWatchlist"])(symbol, stock.name);
            }
            const nextLookup = {
                ...watchlistLookup
            };
            if (currentlyInWatchlist) {
                delete nextLookup[symbol];
            } else {
                nextLookup[symbol] = true;
            }
            setWatchlistLookup(nextLookup);
            setStocks((prev)=>prev.map((item)=>item.symbol === symbol ? {
                        ...item,
                        isInWatchlist: !currentlyInWatchlist
                    } : item));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(currentlyInWatchlist ? `${symbol} removed from watchlist` : `${symbol} added to watchlist`);
        } catch (error) {
            console.error('Watchlist toggle failed', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error('Could not update watchlist. Please try again.');
        } finally{
            setPendingSymbol(null);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            renderAs === 'text' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                onClick: ()=>setOpen(true),
                className: "search-text hover:text-yellow-500 transition-colors",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/SearchCommand.tsx",
                lineNumber: 207,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: ()=>setOpen(true),
                className: "search-btn",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/SearchCommand.tsx",
                lineNumber: 211,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandDialog"], {
                open: open,
                onOpenChange: setOpen,
                className: "search-dialog",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "search-field",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandInput"], {
                                value: searchTerm,
                                onValueChange: setSearchTerm,
                                placeholder: "Search stocks...",
                                className: "search-input"
                            }, void 0, false, {
                                fileName: "[project]/components/SearchCommand.tsx",
                                lineNumber: 218,
                                columnNumber: 21
                            }, this),
                            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "search-loader"
                            }, void 0, false, {
                                fileName: "[project]/components/SearchCommand.tsx",
                                lineNumber: 219,
                                columnNumber: 33
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SearchCommand.tsx",
                        lineNumber: 217,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandList"], {
                        className: "search-list",
                        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$command$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandEmpty"], {
                            className: "search-list-empty",
                            children: "Loading stocks..."
                        }, void 0, false, {
                            fileName: "[project]/components/SearchCommand.tsx",
                            lineNumber: 223,
                            columnNumber: 25
                        }, this) : displayStocks?.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "search-list-indicator",
                            children: isSearchMode ? 'No results found' : 'No stocks available'
                        }, void 0, false, {
                            fileName: "[project]/components/SearchCommand.tsx",
                            lineNumber: 225,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "search-count",
                                    children: [
                                        isSearchMode ? 'Search results' : 'Popular stocks',
                                        ` `,
                                        "(",
                                        displayStocks?.length || 0,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/SearchCommand.tsx",
                                    lineNumber: 230,
                                    columnNumber: 29
                                }, this),
                                displayStocks?.map((stock)=>{
                                    const isPending = pendingSymbol === stock.symbol;
                                    const isDisabled = Boolean(pendingSymbol);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "search-item",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "search-item-link",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/stocks/${encodeURIComponent(stock.symbol)}?${new URLSearchParams({
                                                        exchange: stock.exchange
                                                    }).toString()}`,
                                                    onClick: handleSelectStock,
                                                    className: "flex flex-1 items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                            className: "h-4 w-4 text-gray-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/SearchCommand.tsx",
                                                            lineNumber: 246,
                                                            columnNumber: 49
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "search-item-name",
                                                                    children: stock.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/SearchCommand.tsx",
                                                                    lineNumber: 248,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-gray-500",
                                                                    children: [
                                                                        stock.symbol,
                                                                        " | ",
                                                                        stock.exchange,
                                                                        " | ",
                                                                        stock.type
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/SearchCommand.tsx",
                                                                    lineNumber: 251,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/SearchCommand.tsx",
                                                            lineNumber: 247,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/SearchCommand.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: (event)=>handleToggleWatchlist(event, stock),
                                                    className: "ml-auto flex items-center justify-center rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-700 hover:text-yellow-400 disabled:cursor-not-allowed disabled:opacity-60",
                                                    "aria-pressed": stock.isInWatchlist,
                                                    "aria-label": stock.isInWatchlist ? `Remove ${stock.symbol} from watchlist` : `Add ${stock.symbol} to watchlist`,
                                                    "aria-busy": isPending,
                                                    disabled: isDisabled,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                        className: `h-4 w-4 ${stock.isInWatchlist ? 'text-yellow-400' : ''}`,
                                                        fill: stock.isInWatchlist ? 'currentColor' : 'none',
                                                        strokeWidth: 2
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/SearchCommand.tsx",
                                                        lineNumber: 269,
                                                        columnNumber: 49
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SearchCommand.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/SearchCommand.tsx",
                                            lineNumber: 240,
                                            columnNumber: 41
                                        }, this)
                                    }, stock.symbol, false, {
                                        fileName: "[project]/components/SearchCommand.tsx",
                                        lineNumber: 239,
                                        columnNumber: 37
                                    }, this);
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/SearchCommand.tsx",
                            lineNumber: 229,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/SearchCommand.tsx",
                        lineNumber: 221,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SearchCommand.tsx",
                lineNumber: 216,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(SearchCommand, "x/3JD3yQ6qEM80Ucy9749HQlppE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useDebounce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebounce"]
    ];
});
_c = SearchCommand;
var _c;
__turbopack_context__.k.register(_c, "SearchCommand");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/NavItems.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchCommand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SearchCommand.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const NavItems = ({ initialStocks = [] })=>{
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const isActive = (path)=>{
        if (path === '/') return pathname === '/';
        return pathname.startsWith(path);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAV_ITEMS"].map(({ href, label })=>{
            if (href === '/search') {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchCommand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        renderAs: "text",
                        label: "Search",
                        initialStocks: initialStocks
                    }, void 0, false, {
                        fileName: "[project]/components/NavItems.tsx",
                        lineNumber: 28,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0))
                }, "search-trigger", false, {
                    fileName: "[project]/components/NavItems.tsx",
                    lineNumber: 27,
                    columnNumber: 25
                }, ("TURBOPACK compile-time value", void 0));
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: href,
                    className: `hover:text-yellow-500 transition-colors ${isActive(href) ? 'text-gray-100' : ''}`,
                    children: label
                }, void 0, false, {
                    fileName: "[project]/components/NavItems.tsx",
                    lineNumber: 38,
                    columnNumber: 25
                }, ("TURBOPACK compile-time value", void 0))
            }, href, false, {
                fileName: "[project]/components/NavItems.tsx",
                lineNumber: 37,
                columnNumber: 21
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/components/NavItems.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(NavItems, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = NavItems;
const __TURBOPACK__default__export__ = NavItems;
var _c;
__turbopack_context__.k.register(_c, "NavItems");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/dropdown-menu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuCheckboxItem",
    ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuGroup",
    ()=>DropdownMenuGroup,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuLabel",
    ()=>DropdownMenuLabel,
    "DropdownMenuPortal",
    ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup",
    ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem",
    ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator",
    ()=>DropdownMenuSeparator,
    "DropdownMenuShortcut",
    ()=>DropdownMenuShortcut,
    "DropdownMenuSub",
    ()=>DropdownMenuSub,
    "DropdownMenuSubContent",
    ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger",
    ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function DropdownMenu({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dropdown-menu",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = DropdownMenu;
function DropdownMenuPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dropdown-menu-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c1 = DropdownMenuPortal;
function DropdownMenuTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dropdown-menu-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c2 = DropdownMenuTrigger;
function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "dropdown-menu-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/dropdown-menu.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c3 = DropdownMenuContent;
function DropdownMenuGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "dropdown-menu-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c4 = DropdownMenuGroup;
function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_c5 = DropdownMenuItem;
function DropdownMenuCheckboxItem({ className, children, checked, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        "data-slot": "dropdown-menu-checkbox-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/dropdown-menu.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/dropdown-menu.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/dropdown-menu.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
_c6 = DropdownMenuCheckboxItem;
function DropdownMenuRadioGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"], {
        "data-slot": "dropdown-menu-radio-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_c7 = DropdownMenuRadioGroup;
function DropdownMenuRadioItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"], {
        "data-slot": "dropdown-menu-radio-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
                        className: "size-2 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/dropdown-menu.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/dropdown-menu.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/dropdown-menu.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
_c8 = DropdownMenuRadioItem;
function DropdownMenuLabel({ className, inset, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "dropdown-menu-label",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_c9 = DropdownMenuLabel;
function DropdownMenuSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "dropdown-menu-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
_c10 = DropdownMenuSeparator;
function DropdownMenuShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "dropdown-menu-shortcut",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground ml-auto text-xs tracking-widest", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
_c11 = DropdownMenuShortcut;
function DropdownMenuSub({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sub"], {
        "data-slot": "dropdown-menu-sub",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 198,
        columnNumber: 10
    }, this);
}
_c12 = DropdownMenuSub;
function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"], {
        "data-slot": "dropdown-menu-sub-trigger",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                className: "ml-auto size-4"
            }, void 0, false, {
                fileName: "[project]/components/ui/dropdown-menu.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 210,
        columnNumber: 5
    }, this);
}
_c13 = DropdownMenuSubTrigger;
function DropdownMenuSubContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"], {
        "data-slot": "dropdown-menu-sub-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 230,
        columnNumber: 5
    }, this);
}
_c14 = DropdownMenuSubContent;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;
__turbopack_context__.k.register(_c, "DropdownMenu");
__turbopack_context__.k.register(_c1, "DropdownMenuPortal");
__turbopack_context__.k.register(_c2, "DropdownMenuTrigger");
__turbopack_context__.k.register(_c3, "DropdownMenuContent");
__turbopack_context__.k.register(_c4, "DropdownMenuGroup");
__turbopack_context__.k.register(_c5, "DropdownMenuItem");
__turbopack_context__.k.register(_c6, "DropdownMenuCheckboxItem");
__turbopack_context__.k.register(_c7, "DropdownMenuRadioGroup");
__turbopack_context__.k.register(_c8, "DropdownMenuRadioItem");
__turbopack_context__.k.register(_c9, "DropdownMenuLabel");
__turbopack_context__.k.register(_c10, "DropdownMenuSeparator");
__turbopack_context__.k.register(_c11, "DropdownMenuShortcut");
__turbopack_context__.k.register(_c12, "DropdownMenuSub");
__turbopack_context__.k.register(_c13, "DropdownMenuSubTrigger");
__turbopack_context__.k.register(_c14, "DropdownMenuSubContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/avatar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Avatar",
    ()=>Avatar,
    "AvatarFallback",
    ()=>AvatarFallback,
    "AvatarImage",
    ()=>AvatarImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-avatar/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Avatar({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "avatar",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex size-8 shrink-0 overflow-hidden rounded-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/avatar.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Avatar;
function AvatarImage({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
        "data-slot": "avatar-image",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("aspect-square size-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/avatar.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c1 = AvatarImage;
function AvatarFallback({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$avatar$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fallback"], {
        "data-slot": "avatar-fallback",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-muted flex size-full items-center justify-center rounded-full", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/avatar.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c2 = AvatarFallback;
;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Avatar");
__turbopack_context__.k.register(_c1, "AvatarImage");
__turbopack_context__.k.register(_c2, "AvatarFallback");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/actions/data:a40e58 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7f5996ecfb9bc4a20ef9d99ca72f63013cd5da4d9a":"signOut"},"lib/actions/auth.actions.ts",""] */ __turbopack_context__.s([
    "signOut",
    ()=>signOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var signOut = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7f5996ecfb9bc4a20ef9d99ca72f63013cd5da4d9a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "signOut"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYXV0aC5hY3Rpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAL2xpYi9iZXR0ZXItYXV0aC9hdXRoXCI7XG5pbXBvcnQgeyBpbm5nZXN0IH0gZnJvbSBcIkAvbGliL2lubmdlc3QvY2xpZW50XCI7XG5pbXBvcnQgeyBoZWFkZXJzIH0gZnJvbSBcIm5leHQvaGVhZGVyc1wiO1xuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cblxuXG5leHBvcnQgY29uc3Qgc2lnbk91dCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBhdXRoLmFwaS5zaWduT3V0KHsgaGVhZGVyczogYXdhaXQgaGVhZGVycygpIH0pO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiAnU2lnbiBvdXQgc3VjY2Vzc2Z1bCcgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1NpZ24gb3V0IGZhaWxlZCcsIGUpXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiAnU2lnbiBvdXQgZmFpbGVkJyB9XG4gICAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCBzaWduSW5XaXRoRW1haWwgPSBhc3luYyh7ZW1haWwsIHBhc3N3b3JkfTogU2lnbkluRm9ybURhdGEpID0+IHtcbiAgICB0cnl7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhdXRoLmFwaS5zaWduSW5FbWFpbCggeyBib2R5OiB7IGVtYWlsLCBwYXNzd29yZCB9IH0pO1xuICAgIGlmKHJlc3BvbnNlKSByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXNwb25zZSB9O1xuICAgIHJldHVybiB7c3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdTaWduIGluIGZhaWxlZCd9O1xuXG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6ICdTaWduIGluIGZhaWxlZCcgfTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IHNpZ25VcFdpdGhFbWFpbCA9IGFzeW5jICh7ZnVsbE5hbWUsIGVtYWlsLCBwYXNzd29yZCwgY291bnRyeSwgaW52ZXN0bWVudEdvYWxzLCByaXNrVG9sZXJhbmNlLCBwcmVmZXJyZWRJbmR1c3RyeX06IFNpZ25VcEZvcm1EYXRhKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhdXRoLmFwaS5zaWduVXBFbWFpbCh7IFxuICAgICAgICAgICAgYm9keTogeyBlbWFpbCwgcGFzc3dvcmQsIG5hbWU6IGZ1bGxOYW1lIH0gXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBpbm5nZXN0LnNlbmQoe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImFwcC91c2VyLmNyZWF0ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBlbWFpbCwgbmFtZTogZnVsbE5hbWUsIGNvdW50cnksIGludmVzdG1lbnRHb2Fscywgcmlza1RvbGVyYW5jZSwgcHJlZmVycmVkSW5kdXN0cnkgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIklubmdlc3QgZXZlbnQgZmFpbGVkOlwiLCBlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiByZXNwb25zZSB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdzaWduLXVwIGZhaWxlZCcgfTtcbiAgICB9XG59O1xuXG5cbi8vLy8gdXNlIHRoZSBjb2RlIGJlbG93IGlmIHlvdSB3YW50IHRvIHVzZSBhbiBBUEkgcm91dGUgdG8gc2lnbiB1cCBpbnN0ZWFkXG5cbi8vIGV4cG9ydCBjb25zdCBzaWduVXBXaXRoRW1haWwgPSBhc3luYyAoeyBmdWxsTmFtZSwgZW1haWwsIHBhc3N3b3JkLCBjb3VudHJ5LCBpbnZlc3RtZW50R29hbHMsIHJpc2tUb2xlcmFuY2UsIHByZWZlcnJlZEluZHVzdHJ5IH06IFNpZ25VcEZvcm1EYXRhKSA9PiB7XG4vLyAgICAgdHJ5IHtcbi8vICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL2F1dGgvc2lnbi11cFwiLCB7XG4vLyAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuLy8gICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuLy8gICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBmdWxsTmFtZSwgZW1haWwsIHBhc3N3b3JkLCBjb3VudHJ5LCBpbnZlc3RtZW50R29hbHMsIHJpc2tUb2xlcmFuY2UsIHByZWZlcnJlZEluZHVzdHJ5IH0pXG4vLyAgICAgICAgIH0pO1xuXG4vLyAgICAgICAgIGlmICghcmVzLm9rKSB7XG4vLyAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gYXdhaXQgcmVzLnRleHQoKS5jYXRjaCgoKSA9PiBcIlwiKTtcbi8vICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih0ZXh0IHx8IGBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyAke3Jlcy5zdGF0dXN9YCk7XG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcbi8vICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YToganNvbiB9IGFzIGNvbnN0O1xuLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4vLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuLy8gICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwic2lnbi11cCBmYWlsZWRcIiB9IGFzIGNvbnN0O1xuLy8gICAgIH1cbi8vIH07XG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI0UkFTYSJ9
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/UserDropdown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NavItems$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/NavItems.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$a40e58__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/actions/data:a40e58 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
const UserDropdown = ({ user })=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleSignOut = async ()=>{
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$actions$2f$data$3a$a40e58__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["signOut"])();
        if (result.success) router.push("/sign-in");
        else __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(result.message);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "ghost",
                    className: "flex items-center gap-3 text-gray-4 hover:text-yellow-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                            className: "h-8 w-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                    src: "/assets/images/profile_photo.png"
                                }, void 0, false, {
                                    fileName: "[project]/components/UserDropdown.tsx",
                                    lineNumber: 33,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                    className: "bg-yellow-500 text-yellow-900 text-sm font-bold",
                                    children: user.name[0]
                                }, void 0, false, {
                                    fileName: "[project]/components/UserDropdown.tsx",
                                    lineNumber: 34,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/UserDropdown.tsx",
                            lineNumber: 32,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex flex-col items-start",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-base font-medium text-gray-400",
                                children: user.name
                            }, void 0, false, {
                                fileName: "[project]/components/UserDropdown.tsx",
                                lineNumber: 39,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/UserDropdown.tsx",
                            lineNumber: 38,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/UserDropdown.tsx",
                    lineNumber: 31,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/UserDropdown.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                className: "text-gray-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuLabel"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex relative items-center gap-3 py-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                    className: "h-10 w-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                            src: "/assets/images/profile_photo.png"
                                        }, void 0, false, {
                                            fileName: "[project]/components/UserDropdown.tsx",
                                            lineNumber: 49,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                            className: "bg-yellow-500 text-yellow-900 text-sm font-bold",
                                            children: user.name[0]
                                        }, void 0, false, {
                                            fileName: "[project]/components/UserDropdown.tsx",
                                            lineNumber: 50,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/UserDropdown.tsx",
                                    lineNumber: 48,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-base font-medium text-gray-400",
                                            children: user.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/UserDropdown.tsx",
                                            lineNumber: 55,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-gray-500",
                                            children: user.email
                                        }, void 0, false, {
                                            fileName: "[project]/components/UserDropdown.tsx",
                                            lineNumber: 58,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/UserDropdown.tsx",
                                    lineNumber: 54,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/UserDropdown.tsx",
                            lineNumber: 47,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/UserDropdown.tsx",
                        lineNumber: 46,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {
                        className: "bg-gray-600"
                    }, void 0, false, {
                        fileName: "[project]/components/UserDropdown.tsx",
                        lineNumber: 62,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        onClick: handleSignOut,
                        className: "text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                className: "h-4 w-4 mr-2 hidden sm:block"
                            }, void 0, false, {
                                fileName: "[project]/components/UserDropdown.tsx",
                                lineNumber: 64,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Logout"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/UserDropdown.tsx",
                        lineNumber: 63,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {
                        className: "hidden sm:block bg-gray-600"
                    }, void 0, false, {
                        fileName: "[project]/components/UserDropdown.tsx",
                        lineNumber: 67,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "sm:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$NavItems$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/UserDropdown.tsx",
                            lineNumber: 69,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/UserDropdown.tsx",
                        lineNumber: 68,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/UserDropdown.tsx",
                lineNumber: 45,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/UserDropdown.tsx",
        lineNumber: 29,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(UserDropdown, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = UserDropdown;
const __TURBOPACK__default__export__ = UserDropdown;
var _c;
__turbopack_context__.k.register(_c, "UserDropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_219977da._.js.map