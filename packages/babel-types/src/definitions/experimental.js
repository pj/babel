/* @flow */

import defineType, {
  assertNodeType,
  assertValueType,
  assertEach,
  chain
} from "./index";

defineType("AwaitExpression", {
  builder: ["argument"],
  visitor: ["argument"],
  aliases: ["Expression", "Terminatorless"],
  fields: {
    argument: {
      validate: assertNodeType("Expression"),
    }
  }
});

defineType("BindExpression", {
  visitor: ["object", "callee"],
  aliases: ["Expression"],
  fields: {
    // todo
  }
});

defineType("Decorator", {
  visitor: ["expression"],
  fields: {
    expression: {
      validate: assertNodeType("Expression")
    }
  }
});

defineType("DoExpression", {
  visitor: ["body"],
  aliases: ["Expression"],
  fields: {
    body: {
      validate: assertNodeType("BlockStatement")
    }
  }
});

defineType("ExportDefaultSpecifier", {
  visitor: ["exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    exported: {
      validate: assertNodeType("Identifier")
    }
  }
});

defineType("ExportNamespaceSpecifier", {
  visitor: ["exported"],
  aliases: ["ModuleSpecifier"],
  fields: {
    exported: {
      validate: assertNodeType("Identifier")
    }
  }
});

defineType("RestProperty", {
  visitor: ["argument"],
  aliases: ["UnaryLike"],
  fields: {
    argument: {
      validate: assertNodeType("LVal")
    }
  }
});

defineType("SpreadProperty", {
  visitor: ["argument"],
  aliases: ["UnaryLike"],
  fields: {
    argument: {
      validate: assertNodeType("Expression")
    }
  }
});

defineType("MonadNotation", {
  visitor: ["body"],
  aliases: ["Expression"],
  fields: {
      body: {
          validate: chain(assertValueType("array"), assertEach(assertNodeType("MonadExpression"))),
      }
  }
});

defineType("MonadExpression", {
  visitor: ["id", "expr"],
  fields: {
      id: {
          validate: assertNodeType("Identifier"),
          optional: true
      },
      expr: {
          validate: assertNodeType("Expression")
      }
  }
});

defineType("SwitchWithStatement", {
  visitor: ["discriminant", "cases"],
  aliases: ["Expression"],
  fields: {
    discriminant: {
      validate: assertNodeType("Expression")
    },
    cases: {
      validate: chain(assertValueType("array"), assertEach(assertNodeType("SwitchWith")))
    }
  }
});

defineType("SwitchWith", {
  visitor: ["test", "consequent"],
  fields: {
    test: {
      validate: assertNodeType("Expression"),
      optional: true
    },
    consequent: {
      validate: chain(assertValueType("array"), assertEach(assertNodeType("Statement")))
    }
  }
});
