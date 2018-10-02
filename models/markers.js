module.exports = function (sequelize, DataTypes) {
    var Post = sequelize.define("markers", {
        // id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     primaryKey: true
        // },
        name: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        lat: {
            type: DataTypes.DECIMAL(9,7),
            allowNull: true,

        },
        lng: {
            type: DataTypes.DECIMAL(9,7),
            allowNull: true,

        },
        type: {
            type: DataTypes.TEXT,
            allowNull: false,

        }
    });

    return Post;
};

//     Post.associate = function (models) {
//         // We're saying that a Post should belong to an Author
//         // A Post can't be created without an Author due to the foreign key constraint
//         Post.belongsTo(models.Author, {
//             foreignKey: {
//                 allowNull: false
//             }
//         });
//     };

//     return Post;
// };
