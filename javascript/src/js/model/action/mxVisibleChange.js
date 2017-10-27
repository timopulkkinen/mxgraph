
/**
 * Class: mxVisibleChange
 *
 * Action to change a cell's visible state in a model.
 *
 * Constructor: mxVisibleChange
 *
 * Constructs a change of a visible state in the
 * specified model.
 */
function mxVisibleChange(model, cell, visible)
{
	this.model = model;
	this.cell = cell;
	this.visible = visible;
	this.previous = visible;
};

/**
 * Function: execute
 *
 * Changes the visible state of <cell> to <previous> using
 * <mxGraphModel.visibleStateForCellChanged>.
 */
mxVisibleChange.prototype.execute = function()
{
	this.visible = this.previous;
	this.previous = this.model.visibleStateForCellChanged(
		this.cell, this.previous);
};
