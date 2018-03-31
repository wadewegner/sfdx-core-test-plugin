import { flags } from '@oclif/command';
import { join } from 'path';
import { SfdxCommand, core } from '@salesforce/command';

export default class Org extends SfdxCommand {

  public static description = 'command message';
  protected static requiresUsername = true;
  protected static supportsDevhubUsername = true;
  protected static requiresProject = false;

  public async run(): Promise<any> {

    // SfdxCommand
    this.ux.styledHeader('SfdxCommand');

    // Dev Hub
    await this.hubOrg.refreshAuth();
    this.ux.log('refreshed devhub org auth');

    let devHubUsername = this.hubOrg.getConnection().getUsername();
    this.ux.log('devHubUsername', devHubUsername);

    let devHubOrgId = this.hubOrg.getOrgId();
    this.ux.log('devHubOrgId', devHubOrgId);

    let devHubOrgConnectionOptions = this.hubOrg.getConnection().getAuthInfo().getConnectionOptions();
    this.ux.log('devHubOrgConnectionOptions', devHubOrgConnectionOptions);

    let devHubOrgConfigAggregator = this.hubOrg.getConfigAggregator();
    let devHubOrgConfigInfo = devHubOrgConfigAggregator.getConfigInfo();
    this.ux.log('devHubOrgConfigInfo', devHubOrgConfigInfo);

    let devHubMetaInfo = this.hubOrg.getMetaInfo();
    this.ux.log('devHubMetaInfo', devHubMetaInfo);

    // Default Org
    await this.org.refreshAuth();
    this.ux.log('refreshed org auth');

    let username = this.org.getConnection().getUsername();
    this.ux.log('username', username);

    let orgId = this.org.getOrgId();
    this.ux.log('orgId', orgId);

    let orgConnectionOptions = this.org.getConnection().getAuthInfo().getConnectionOptions();
    this.ux.log('orgConnectionOptions', orgConnectionOptions);

    let orgConfigAggregator = this.org.getConfigAggregator();
    let orgConfigInfo = orgConfigAggregator.getConfigInfo();
    this.ux.log('orgConfigInfo', orgConfigInfo);

    let orgMetaInfo = this.org.getMetaInfo();
    this.ux.log('orgMetaInfo', orgMetaInfo);

    // core
    this.ux.styledHeader('core');

    let devHubOrgOptions = core.OrgUsersConfig.getOptions(devHubOrgId);
    this.ux.log('devHubOrgOptions', devHubOrgOptions);

    let orgOptions = core.OrgUsersConfig.getOptions(orgId);
    this.ux.log('orgOptions', orgOptions);

    let usernameAliasFileName = await core.Aliases.getFileName();
    this.ux.log('usernameAliasFileName', usernameAliasFileName);

    core.SfdxConfig

    // Return an object to be displayed with --json
    return { devHubUsername, devHubOrgId, devHubOrgConnectionOptions, devHubOrgConfigInfo, devHubMetaInfo,
      username, orgId, orgConnectionOptions, orgConfigInfo, orgMetaInfo,
      devHubOrgOptions, orgOptions, usernameAliasFileName 
    };
  }
}
