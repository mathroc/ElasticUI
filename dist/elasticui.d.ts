﻿declare module elasticui.util {
    class FilterCollection {
        public filters: any[];
        private jsonFilters;
        private getFilterIndex(filter);
        public add(filter: any): void;
        public remove(filter: any): void;
        public getAsFilter(): any[];
        public getAsORFilter(): any[];
        public contains(filter: any): boolean;
    }
}
declare module elasticui.util {
    class FilterTool {
        static combineFilters(filters: any[]): any;
        static combineFiltersShould(filters: any[]): any;
        static getJsonFromFilter(filter: any): string;
        static equals(filterA: any, filterB: any): boolean;
    }
}
declare module elasticui.services {
    var services: ng.IModule;
}
declare module elasticui.directives {
    var directives: ng.IModule;
}
declare module elasticui.directives {
    class AggregationDirective {
        constructor();
    }
}
declare module elasticui.directives {
    class FilterDirective {
        constructor($timeout: any);
    }
}
declare module elasticui.directives {
    class IndexDirective {
        constructor();
    }
}
declare module elasticui.directives {
    class InvertedDirective {
        constructor();
    }
}
declare module elasticui.directives {
    class OrFilterDirective {
        constructor();
    }
}
declare module elasticui.directives {
    class SortDirective {
        constructor();
    }
}
declare module elasticui.directives {
    class VarDirective {
        constructor($timeout: any);
    }
}
declare module elasticui.filters {
    var filters: ng.IModule;
}
declare module elasticui.filters {
    class CachedFilter {
        constructor();
    }
}
declare module elasticui.filters {
    class MapFilter {
        private static parseString(input);
        private static getValue(element, propertyArray);
        constructor();
    }
}
declare module elasticui.filters {
    class PageRangeFilter {
        constructor();
    }
}
declare module elasticui.filters {
    class RangeFilter {
        constructor();
    }
}
declare module elasticui.filters {
    class RoundFilter {
        constructor();
    }
}
declare module elasticui.filters {
    class TimestampFilter {
        constructor();
    }
}
declare module elasticui.controllers {
    interface IAggregationScope extends IIndexScope {
        aggResult: any;
    }
    class AggregationController {
        public agg: any;
        public filterSelf: boolean;
        private scope;
        static $inject: string[];
        constructor($scope: IAggregationScope);
        private getAggName();
        private updateResults();
        public setFilterSelf(filterSelf?: boolean): void;
        public setAggregation(agg: any): void;
        public getAggregation(filters: any[]): any;
    }
}
declare module elasticui.controllers {
    interface IFilterScope extends IIndexScope {
        filter: {
            filter: boolean;
            enabled: boolean;
        };
    }
    class FilterController {
        private scope;
        static $inject: string[];
        constructor($scope: IFilterScope);
        public init(): void;
        private updateFilter();
    }
}
declare module elasticui.controllers {
    interface IFilteredScope extends ng.IScope {
        filters: util.FilterCollection;
        combinedFilter: any;
    }
}
declare module elasticui.controllers {
    interface IIndexScope extends IFilteredScope {
        indexVM: IIndexViewModel;
    }
    interface IIndexViewModel {
        sort: any;
        loaded: boolean;
        loading: boolean;
        page: number;
        index: string;
        pageCount: number;
        pageSize: number;
        results: any;
        addAggregationProvider: (any: any) => void;
        refresh: () => void;
    }
}
declare module elasticui.controllers {
    class IndexController {
        private aggregations;
        private es;
        public filters: util.FilterCollection;
        public indexVM: IIndexViewModel;
        public loaded(): void;
        public addAggregationProvider(aggProvider: any): void;
        static $inject: string[];
        constructor($scope: any, $timeout: any, $window: any, es: services.ElasticService);
        private getSearchPromise();
        private searchPromise;
        private refreshPromise;
        private search();
        public refreshIfDocCountChanged(): void;
        private onResult(body, updateOnlyIfCountChanged?);
    }
}
declare module elasticui.controllers {
    class OrFilterController {
        public filters: util.FilterCollection;
        private scope;
        static $inject: string[];
        constructor($scope: any);
        private updateCombinedFilter();
    }
}
declare module elasticui.controllers {
    interface ISortScope extends IIndexScope {
        sorting: {
            sort: any;
            enabled: boolean;
        };
    }
    class SortController {
        private scope;
        static $inject: string[];
        constructor($scope: ISortScope);
        public init(): void;
        private updateSort();
        public updateEnabled(): void;
    }
}
declare module elasticui.services {
    class ElasticService {
        public client: any;
        static $inject: string[];
        constructor(esFactory: any, euiHost: any);
    }
}
