
/**
 * Class: mxGeometryChange
 *
 * Action to change a cell's geometry in a model.
 *
 * Constructor: mxGeometryChange
 *
 * Constructs a change of a geometry in the
 * specified model.
 */
function mxGeometryChange(model, cell, geometry)
{
	this.model = model;
	this.cell = cell;
	this.geometry = geometry;
	this.previous = geometry;
};

/**
 * Function: execute
 *
 * Changes the geometry of <cell> ro <previous> using
 * <mxGraphModel.geometryForCellChanged>.
 */
mxGeometryChange.prototype.execute = function()
{
	this.geometry = this.previous;
	this.previous = this.model.geometryForCellChanged(
		this.cell, this.previous);
};
