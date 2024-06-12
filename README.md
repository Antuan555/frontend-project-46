### Hexlet tests and linter status:
[![Actions Status](https://github.com/Antuan555/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Antuan555/frontend-project-46/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/db2b8e659f9ee43fa135/test_coverage)](https://codeclimate.com/github/Antuan555/frontend-project-46/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/db2b8e659f9ee43fa135/maintainability)](https://codeclimate.com/github/Antuan555/frontend-project-46/maintainability)

# Вычислитель различий

Данный проект представляет собой консольную утилиту для сравнения двух обЪектов из файлов с форматами JSON, YML и YAML.

# Пример работы
```bash
gendiff file3.json file4.yml

{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow:
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}
```
# Установка

```bash
git clone git@github.com:Antuan555/frontend-project-46.git
cd frontend-project-46
make install
```
# Использование

```bash
gendiff [options] <filepath1> <filepath2>
пример: gendiff -f plain file1.json file2.json
```

```bash
options:
  -V, --version        output the version number
  -f, --format [type]  output format (default: "stylish")
  -h, --help           display help for command
```

Программа умеет выводить различия в трех форматах, по умолчанию это формат stylish. Также это могут быть plain и json. Для вывода результата согласно определенному формату введите -f [format]

```bash
gendiff -f plain file1.json file2.yml
```

Пример такого вывода:
```bash
Property 'follow' was removed
Property 'proxy' was removed
Property 'timeout' was updated. From 50 to 20
Property 'verbose' was added with value: true
```