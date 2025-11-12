import TradingViewWidget from "@/components/TradingViewWidget";
import AddToWatchlistButton from "@/components/AddToWatchlistButton";
import {
    ADVANCED_CHART_WIDGET_CONFIG,
    ADVANCED_LINE_CHART_WIDGET_CONFIG,
    FINANCIALS_WIDGET_CONFIG,
    SYMBOL_INFO_WIDGET_CONFIG,
    SYMBOL_PROFILE_WIDGET_CONFIG,
    TECHNICAL_ANALYSIS_WIDGET_CONFIG,
} from "@/lib/constants";

type StockPageProps = {
    params: Promise<{ symbol: string }>;
    searchParams: Promise<{ exchange?: string }>;
};

const StockPage = async ({ params, searchParams }: StockPageProps) => {
    const { symbol } = await params;
    let { exchange } = await searchParams;

    console.log('exchange', exchange);
    console.log('symbol', symbol);

    exchange = exchange?.split(" ")[0]; //this way we only keep Nasdq instead of Nasdaq Global markets

    const scriptBaseUrl = "https://s3.tradingview.com/external-embedding/embed-widget-";

    const normalizedSymbol = symbol?.toUpperCase() ?? "UNKNOWN";
    const normalizedExchange = exchange?.toUpperCase();

    const tradingViewSymbol =
        normalizedSymbol.includes(":") || !normalizedExchange
            ? normalizedSymbol
            : `${normalizedExchange}:${normalizedSymbol}`;

    return (
        <div className="min-h-screen w-full bg-[#0f0f0f] px-4 py-8 text-gray-100">
            <section className="mx-auto flex w-full max-w-7xl flex-col gap-8">
                <header className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold">{normalizedSymbol}</h1>
                    <p className="text-sm text-gray-400">
                        {normalizedExchange ? `${normalizedExchange} • ` : ""}
                        Trading Dashboard
                    </p>
                </header>

                <div className="grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
                    <div className="flex flex-col gap-6">
                        <TradingViewWidget
                            title={`${normalizedSymbol} Snapshot`}
                            scriptUrl={`${scriptBaseUrl}symbol-info.js`}
                            config={{ ...SYMBOL_INFO_WIDGET_CONFIG, symbol: tradingViewSymbol }}
                            height={220}
                        />
                        <TradingViewWidget
                            title="Advanced Chart"
                            scriptUrl={`${scriptBaseUrl}advanced-chart.js`}
                            config={{ ...ADVANCED_CHART_WIDGET_CONFIG, symbol: tradingViewSymbol }}
                            height={600}
                        />
                        <TradingViewWidget
                            title="Line Chart"
                            scriptUrl={`${scriptBaseUrl}advanced-chart.js`}
                            config={{ ...ADVANCED_LINE_CHART_WIDGET_CONFIG, symbol: tradingViewSymbol }}
                            height={400}
                        />
                    </div>

                    <div className="flex flex-col gap-6">
                        <AddToWatchlistButton symbol={symbol} exchange={exchange} />
                        <TradingViewWidget
                            title="Technical Analysis"
                            scriptUrl={`${scriptBaseUrl}technical-analysis.js`}
                            config={{ ...TECHNICAL_ANALYSIS_WIDGET_CONFIG, symbol: tradingViewSymbol }}
                            height={450}
                        />
                        <TradingViewWidget
                            title="Company Profile"
                            scriptUrl={`${scriptBaseUrl}symbol-profile.js`}
                            config={{ ...SYMBOL_PROFILE_WIDGET_CONFIG, symbol: tradingViewSymbol }}
                            height={450}
                        />
                        <TradingViewWidget
                            title="Financials"
                            scriptUrl={`${scriptBaseUrl}financials.js`}
                            config={{ ...FINANCIALS_WIDGET_CONFIG, symbol: tradingViewSymbol }}
                            height={540}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StockPage;