import { HostTree } from '@angular-devkit/schematics';
import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import * as path from 'path';
import packageJson from './react-pkg.json';

const collectionPath = path.join(__dirname, '../collection.json');

describe('rsi', () => {
  it('works', (done) => {
    const tree = new UnitTestTree(new HostTree);
    tree.create('/package.json', JSON.stringify(packageJson));

    const runner = new SchematicTestRunner('schematics', collectionPath);
    runner.runSchematicAsync('rsi', {}, tree).toPromise().then(tree => {
      expect(tree.files.length).toEqual(3);
      expect(tree.files.sort()).toEqual(['/package.json', '/src/App.js', '/src/index.js']);

      const mainContent = tree.readContent('/src/index.js');
      expect(mainContent).toContain(`import 'bootstrap/dist/css/bootstrap.min.css'`);
      done();
    }, done.fail);
  });
});
