
/**
 * Class: mxStyleChange
 *
 * Action to change a cell's style in a model.
 *
 * Constructor: mxStyleChange
 *
 * Constructs a change of a style in the
 * specified model.
 */
function mxStyleChange(model, cell, style)
{
	this.model = model;
	this.cell = cell;
	this.style = style;
	this.previous = style;
};

/**
 * Function: execute
 *
 * Changes the style of <cell> to <previous> using
 * <mxGraphModel.styleForCellChanged>.
 */
mxStyleChange.prototype.execute = function()
{
	this.style = this.previous;
	this.previous = this.model.styleForCellChanged(
		this.cell, this.previous);
};
