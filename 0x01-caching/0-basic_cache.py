#!/usr/bin/env python3
"""Basic ditionnary where your data are stored
"""
from base_caching import BaseCaching


class BasicCache(BaseCaching):
    """class basicCach definition"""
    def put(self, key, item):
        """Add item in the cache."""
        if key is None or item is None:
            return
        self.cache_data[key] = item

    def get(self, key):
        """retrieves  item by key."""
        return self.cache_data.get(key, None)
