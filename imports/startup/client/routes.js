/**
 * Created by Hashtag Gigs on 4/8/2017.
 */
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Statics } from '../../statics/statics';

import '../../ui/layouts/main-layout';

FlowRouter.route(`/${Statics.Text.PathName.MapsPage}`, {
    name: Statics.Text.RouteName.MapsPage,
    action: () => {
        BlazeLayout.render(Statics.Text.TemplateName.MainLayout, { content: Statics.Text.TemplateName.MapsPage });
    }
});

FlowRouter.route('/', {
    name: Statics.Text.RouteName.Default,
    action: () => {
        FlowRouter.go(Statics.Text.RouteName.MapsPage);
    }
});