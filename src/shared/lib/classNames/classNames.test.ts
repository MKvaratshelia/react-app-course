import { classNames } from './classNames';

console.log(classNames('someClass'));
describe('classNames', () => {
    test('first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with aditional', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(
            expected,
        );
    });
    test('width mods true', () => {
        const expected = 'someClass mod';
        expect(classNames('someClass', { mod: true }, [])).toBe(expected);
    });
    test('width mods false', () => {
        const expected = 'someClass';
        expect(classNames('someClass', { mod: false }, [])).toBe(expected);
    });
    test('width mods and additionals', () => {
        const expected = 'someClass class1 mod';
        expect(classNames('someClass', { mod: true }, ['class1'])).toBe(
            expected,
        );
    });
});
