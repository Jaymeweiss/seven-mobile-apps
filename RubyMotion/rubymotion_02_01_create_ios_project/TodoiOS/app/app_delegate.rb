#---
# Excerpted from "Seven Mobile Apps in Seven Weeks",
# published by The Pragmatic Bookshelf.
# Copyrights apply to this code. It may not be used to create training material,
# courses, books, articles, and the like. Contact us if you are in doubt.
# We make no guarantees that this code is fit for any purpose.
# Visit http://www.pragmaticprogrammer.com/titles/7apps for more book information.
#---
class AppDelegate
  def application(application, didFinishLaunchingWithOptions:launchOptions)
    rootViewController = UIViewController.alloc.init
    rootViewController.title = 'Todo'
    rootViewController.view.backgroundColor = UIColor.whiteColor

    navigationController = UINavigationController.alloc.initWithRootViewController(rootViewController)

    @window = UIWindow.alloc.initWithFrame(UIScreen.mainScreen.bounds)
    @window.rootViewController = navigationController
    @window.makeKeyAndVisible

    true
  end
end
