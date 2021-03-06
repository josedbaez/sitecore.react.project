namespace Sitecore.Feature.Navigation.Repositories
{
    using Sitecore.Data.Items;
    using Sitecore.Feature.Navigation.Model;

    public interface INavigationRepository
    {
        Item GetNavigationRoot(Item contextItem);
        NavigationItems GetBreadcrumb();
        NavigationItems GetPrimaryMenu();
        NavigationItem GetSecondaryMenuItem();
        NavigationItems GetLinkMenuItems(Item menuItem);
    }
}