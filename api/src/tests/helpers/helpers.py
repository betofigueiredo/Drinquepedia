class CreateDotDict(dict):
    __getattr__ = dict.get
    __setattr__ = dict.__setitem__  # type: ignore
    __delattr__ = dict.__delitem__  # type: ignore

    @property
    def serialized(self):
        return self
