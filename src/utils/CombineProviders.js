import { cloneElement } from "react";

// combine providers to make it easier to read
const CombineProviders = ({providers, children}) => {
  const renderProvider = (providers, children) => {
    const [provider, ...restProviders] = providers;
    
    if (provider) {
      return cloneElement(
        provider,
        null,
        renderProvider(restProviders, children)
      )
    }

    return children;
  }

  return renderProvider(providers, children)
}

export default CombineProviders;
