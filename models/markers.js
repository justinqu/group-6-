module.exports = function (sequelize, DataTypes) {
    var Post = sequelize.define("markers", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        lat: {
            type: DataTypes.DECIMAL(9, 7),
            allowNull: false,

        },
        lng: {
            type: DataTypes.DECIMAL(9, 7),
            allowNull: false,

        },
        type: {
            type: DataTypes.TEXT,
            allowNull: false,

        }
    });

    return Post;
};

